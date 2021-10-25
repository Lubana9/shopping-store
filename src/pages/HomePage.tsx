import React, { useEffect, useState } from "react";

import Card from "@components/card/Card";
import axios from "axios";

const HomPage: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((products: any) => {
        setIsLoading(false);
        setList(products.data);
      });
  }, []);

  return (
    <>
      {list.map((Products) => {
        return <div> {Products}</div>;
      })}
    </>
  );
};

export default HomPage;
