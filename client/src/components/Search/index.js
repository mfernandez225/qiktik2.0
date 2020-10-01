import React, {useRef} from "react";
import { Typeahead } from "react-bootstrap-typeahead";


export default function Search(props,{onChange}) {
  const ref = useRef();
  // console.log(props.stocks)
  
  
  // Clears stock search once a card is displayed
  const handleChange = (selected) => {
    onChange(selected[0]);
    ref.current.clear();
  };

  // typeahead is a reactstrap feature. Searching stock names or symbols
  return (
    <Typeahead
      size="lg"
      className="input-group mt-5 mb-5"
      id="stock-search"
      labelKey={(stock) => `${stock.symbol}: ${stock.name}`}
      onChange={handleChange}
      options={props.stocks}
      placeholder="Choose a stock..."
      ref={ref}
    ></Typeahead>
  );
}
