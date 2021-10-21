/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import ShoppingCard from "@components/card/Card";
import InputGroup from "@components/InputGroup/InputGroup";
import axios from "axios";
import { StoreItem } from "src/store/StorItem";

const HomPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products").then((item: any) => {
      setIsLoading(false);
      setList(item.data);
    });
  }, []);
  return (
    <>
      {/* <InputGroup value={value} onChange={} /> */}
      {list.map((item: StoreItem) => {
        return <ShoppingCard data={item} key={item.id} />;
      })}
    </>
  );
};

export default HomPage;
