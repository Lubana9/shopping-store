import React, { useEffect, useState } from "react";

import Card from "@components/card/Card";
import ShoppingCard from "@components/card/Card";
import Categories from "@components/categories/Categories";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Product, StoreItem } from "src/store/StorItem";

import { routes } from "../configs/config";
import ProductPage from "./ProductPage";

const HomPage: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((item: any) => {
        setIsLoading(false);
        setList(item.data);
      });
  }, []);

  const getItem = (product: string, value: string) => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${product}`)
      .then((item: any) => {
        setIsLoading(false);
        setList(item.data);
      });
    let path = value;
    history.push(path);
  };

  return (
    <>
      {list.map((product) => {
        return (
          <Link to={routes.items.mask1}>
            <Categories
              onClick={() => getItem(product, `${routes.items.mask1}`)}
              data={product}
            >
              {onclick}
              {<ProductPage />}
            </Categories>
          </Link>
        );
      })}
    </>
  );
};

export default HomPage;
