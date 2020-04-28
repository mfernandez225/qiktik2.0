import React, { useRef } from "react";
import stocks from "../stockData";
import { Typeahead } from "react-bootstrap-typeahead";

export default function StockSelect({ onChange }) {
  const ref = useRef();

  const handleChange = (selected) => {
    onChange(selected[0]);
    ref.current.clear();
  };

  return (
    <Typeahead
      className="input-group mt-5 mb-5 border border-dark"
      id="stock-search"
      labelKey={(stock) => `${stock.symbol}: ${stock.name}`}
      onChange={handleChange}
      options={stocks}
      placeholder="Choose a stock..."
      ref={ref}
    />
  );
}
