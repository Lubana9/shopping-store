import React, { useState } from "react";

import "./style.css";
import "antd/dist/antd.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Card, Button, Badge } from "antd";
import { StoreItem } from "src/store/StorItem";
export type CardProps = {
  data: StoreItem;
};
const ShoppingCard: React.FC<CardProps> = ({ data }) => {
  const [count, setCount] = useState(0);

  const handelIncrement = () => {
    setCount(count + 1);
  };
  const handelDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card-container">
      <Badge count={count}>
        <Card
          className="img-container"
          cover={<img className="card-img" src={data.image} alt="product" />}
          actions={[
            <Button onClick={handelIncrement}>+</Button>,
            <div> {`${(count * data.price).toFixed(2)} $`}</div>,
            <Button onClick={handelDecrement}>-</Button>,
          ]}
        >
          <Card
            className="card-title"
            title={`${data.price}$`}
            bordered={false}
          >
            {data.title}
          </Card>
        </Card>
      </Badge>
    </div>
  );
};

export default ShoppingCard;
