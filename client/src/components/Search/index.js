import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export default function Search(props) {
  // typeahead is a reactstrap feature. Searching stock names or symbols
  return (
    <Typeahead
      size="lg"
      className="input-group mt-5 mb-5"
      id="stock-search"
      labelKey={(stock) => `${stock.symbol}: ${stock.name}`}
      options={props.stocks}
      onChange={props.onChange}
      placeholder="Choose a stock..."
    ></Typeahead>
  );
}
