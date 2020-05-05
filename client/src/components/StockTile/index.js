import React, { useState, useEffect } from "react";
// import Chart from "../../components/Chart";
// import SymbolPage from "../../components/SymbolPage/stockPage";
import { Card, CardBody } from "reactstrap";
import API from "../../utils/API";
import StockChart from "../../AppC";
import News from "../../News";
import "./style.css";
require("dotenv").config();

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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

  const handleSave = async () => {
    const response = await API.saveFavorite(selectedStock);
    setFavoriteStocks(response.data);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Card className="text-left">
          <CardBody>
            <h3 id="searchedCompanyName" className="fontMe font-weight-bolder">
              {names}
            </h3>
            <h5 className="fontMe font-weight-bolder">{symbol}</h5>
            <h3 id="stockPrice" className="fontMe font-weight-bolder">
              {formatter.format(items)}
            </h3>
            <div className="fontMeSmall mt-2">
              Market Cap: {formatter.format(marketcap)}
            </div>
            <div className="fontMeSmall">PE Ratio: {peratio}</div>
            <button id="favoriteIcon" onClick={handleSave} className="btn">
              <i class="fas fa-heart fa-2x"></i>
            </button>
            <StockChart symbol={symbol} />
          </CardBody>
        </Card>
        <News />
      </div>
    );
  }
};
export default StockTile;
