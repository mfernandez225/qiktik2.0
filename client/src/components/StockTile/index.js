import React, { useState, useEffect } from "react";
// import Chart from "../../components/Chart";
// import SymbolPage from "../../components/SymbolPage/stockPage";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import API from "../../utils/API";
import AppC from "../../AppC";

const StockTile = ({ setFavoriteStocks, selectedStock }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [names, setNames] = useState([]);
  const [tickersymbol, settickerSymbol] = useState([]);
  const [items, setItems] = useState([]);
  const [marketcap, setMarketCap] = useState([]);
  const [peratio, setPERatio] = useState([]);
  const { symbol } = selectedStock;

  useEffect(() => {
    // fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol +"&apikey=6QFBH662YTYIW2BW")
    fetch(
      "https://sandbox.iexapis.com/stable/stock/" +
        symbol +
        "/quote/2?token=Tpk_8ffdae4873fd4f08a97e679741d27746"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          setNames(result["companyName"]);
          settickerSymbol(result["symbol"]);
          setItems(result["latestPrice"]);
          setMarketCap(result["marketCap"]);
          setPERatio(result["peRatio"]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [symbol]);

  const handleSave = () => {
    setFavoriteStocks((prev) => [...prev, selectedStock]);
    API.saveFavorite(selectedStock);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container-fluid>
      <Card className="border border-dark">
        <CardHeader>
          <CardTitle style={{ listStyleType: "none" }}> {names} </CardTitle>
        </CardHeader>
        <CardBody>
          <ul>
            <li style={{ listStyleType: "none" }}> Symbol: {tickersymbol} </li>
            <li style={{ listStyleType: "none" }}> Current Price: ${items} </li>
            <li style={{ listStyleType: "none" }}>
              {" "}
              Market Cap: ${marketcap}{" "}
            </li>
            <li style={{ listStyleType: "none" }}> PE Ratio: {peratio} </li>
          </ul>
          <button className="btn btn-dark" onClick={handleSave}>
            Save
          </button>
        </CardBody>
      </Card>
      <br></br>
          <AppC />
      </Container-fluid>  
    );
  }
};
export default StockTile;
