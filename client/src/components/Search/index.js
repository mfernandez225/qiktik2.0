import React, {useRef} from "react";
import { Typeahead } from "react-bootstrap-typeahead";
// import API from "../../utils/API";

export default function StockSelect({ onChange }) {
  const ref = useRef();
//   const[stocks, setStocks] = useState([])
//   useEffect(()=>
//   loadStocks(),
// [])

// function loadStocks() {
//   API.getStocks
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))
// }
const options = [
  { symbol: "A",
    name: "Agilent Technologies Inc",},
  {
  symbol: "B",
  name:"beta"
},{
  symbol: "C",
  name:"Charlie"
}]
  
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
      options={options}
      placeholder="Choose a stock..."
      ref={ref}
    ></Typeahead>
  );
}
