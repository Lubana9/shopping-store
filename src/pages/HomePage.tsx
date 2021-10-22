/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import ShoppingCard from "@components/card/Card";
import InputGroup from "@components/InputGroup/InputGroup";
import axios from "axios";
import { StoreItem } from "src/store/StorItem";
import "./style.css";
import "@styles/style.css";
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
  const handelChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    const filter = list.filter((item: StoreItem) =>
      `${item.title}`.toLowerCase().includes(value)
    );
    console.log(filter);
    setList(filter);
  };
  return (
    <>
      <InputGroup value={value} onChange={handelChange} />
      <div className="grid">
        {list.map((item: StoreItem) => {
          return <ShoppingCard data={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default HomPage;
