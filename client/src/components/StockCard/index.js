import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function StockCard({displayData}) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{displayData.name}</CardTitle>
          <CardSubtitle>{displayData.symbol}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default StockCard;
