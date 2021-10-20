import React from "react";

import "./style.css";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
const ShoppingCard: React.FC = () => {
  return (
    <div>
      <Card
        className="card-img"
        cover={
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        }
        actions={[<Button>+ </Button>, <div>2 </div>, <Button>- </Button>]}
      >
        <Card title="product name" bordered={false}>
          description
        </Card>
      </Card>
    </div>
  );
};

export default ShoppingCard;
