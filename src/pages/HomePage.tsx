import React, { useEffect, useState } from "react";

import Card from "@components/card/Card";
import ShoppingCard from "@components/card/Card";
import Categories from "@components/categories/Categories";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { StoreItem } from "src/store/StorItem";

import { routes } from "../configs/config";
import ProductPage from "./ProductPage";

const HomPage: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((item: any) => {
        setIsLoading(false);
        setList(item.data);
      });
  }, []);

  return (
    <>
      {list.map((product) => {
        return (
          <Link to={routes.items.mask1}>
            <Categories data={product}></Categories>
          </Link>
        );
      })}
    </>
  );
};

export default HomPage;
