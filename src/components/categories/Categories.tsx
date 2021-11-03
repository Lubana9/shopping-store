import React from "react";

import { Card } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export type CategoriesProps = {
  data: string[];
  onClick?: React.MouseEventHandler;
};
const Categories: React.FC<CategoriesProps> = ({ data, onClick }) => {
  return <Card onClick={onClick}>{data}</Card>;
};

export default Categories;
