import React from "react";

import "./style.css";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
import { StoreItem } from "src/store/StorItem";
export type CardProps = {
  data: StoreItem;
};
const ShoppingCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      <Card
        className="card-img"
        cover={<img src={data.image} alt="product" />}
        actions={[<Button>+ </Button>, <div>2 </div>, <Button>- </Button>]}
      >
        <Card title={`${data.price}$`} bordered={false}>
          {data.title}
        </Card>
      </Card>
    </div>
  );
};

export default ShoppingCard;
