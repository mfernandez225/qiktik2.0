import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const StockTile = ({ selectedStock: { name, symbol } }) => {
  return (
    <Card className="border border-dark p-5 mt-5">
      <CardHeader>
        <CardTitle>Stock Name: {name}</CardTitle>
      </CardHeader>
      <CardBody>Stock Symbol: {symbol}</CardBody>
    </Card>
  );
};

export default StockTile;
