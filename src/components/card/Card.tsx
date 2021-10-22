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
    <div className="card-container">
      <Card
        className="img-container"
        cover={<img className="card-img" src={data.image} alt="product" />}
        actions={[<Button>+ </Button>, <div>2 </div>, <Button>- </Button>]}
      >
        <Card className="card-title" title={`${data.price}$`} bordered={false}>
          {data.title}
        </Card>
      </Card>
    </div>
  );
};

export default ShoppingCard;
