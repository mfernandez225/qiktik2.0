import React, {useRef, useState, useEffect} from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import API from "../../utils/API";

export default function Search({ onChange }) {
  const ref = useRef();
  const [stocks, setStocks]= useState([]);
  useEffect(()=>{
    loadStocks()
  }, [])

  function loadStocks() {
    API.getStocks()
    .then(res => 
     { console.log(res.data)
      setStocks(res.data)}
      )
      .catch(err => console.log(err));
  }
  
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
      options={stocks}
      placeholder="Choose a stock..."
      ref={ref}
    ></Typeahead>
  );
}
