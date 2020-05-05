import React, { useRef } from "react";
import stocks from "../stockData";
import { Typeahead } from "react-bootstrap-typeahead";

export default function StockSelect({ onChange }) {
  const ref = useRef();
  // Clears stock search once a card is displayed
  const handleChange = (selected) => {
    onChange(selected[0]);
    ref.current.clear();
  };

  // typeahead is a reactstrap feature. Searching stock names or symbols
  return (
    <Typeahead
      className="input-group mt-5 mb-3"
      id="stock-search"
      labelKey={(stock) => `${stock.symbol}: ${stock.name}`}
      onChange={handleChange}
      options={stocks}
      placeholder="Choose a stock..."
      ref={ref}
    ></Typeahead>
  );
}
