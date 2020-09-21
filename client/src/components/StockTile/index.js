import React, { useState, useEffect } from "react";
import { Card, CardBody, Row } from "reactstrap";
import API from "../../utils/API";
import StockChart from "../StockChart/StockChart";
import "./style.css";
const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const StockTile = ({ setFavoriteStocks, selectedStock }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [names, setNames] = useState([]);
  // const [tickersymbol, settickerSymbol] = useState([]);
  const [items, setItems] = useState([]);
  const [marketcap, setMarketCap] = useState([]);
  const [peratio, setPERatio] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const { symbol } = selectedStock;

  useEffect(() => {
    
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${IEX_TOKEN}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          setNames(result["companyName"]);
          // settickerSymbol(result["symbol"]);
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
        <Card id="background">
          <CardBody className="text-center">
            <h3 id="searchedCompanyName" className="fontMe font-weight-bolder">
              {names}
            </h3>
            <h5 className="fontMe font-weight-bolder" id="companySymbol">
              {symbol}
            </h5>

            <div id="container">
              <div className="fontMeSmall mt-2">
                Market Cap: {formatter.format(marketcap)}
              </div>
              <div className="fontMeSmall">PE Ratio: {peratio}</div>
              <h3 id="stockPrice" className="fontMe  font-weight-bolder">
                {formatter.format(items)}
              </h3>

              <Row id="icons">
                <button id="favoriteIcon" onClick={handleSave} className="btn ">
                  <i className="fas fa-heart fa-2x"></i>
                </button>
                <button
                  id="favoriteIcon"
                  onClick={() => setShowChart((prev) => !prev)}
                  className="btn "
                >
                  <i className="fas fa-chart-line fa-2x"></i>
                </button>
                {showChart && <StockChart symbol={symbol} />}
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
};
export default StockTile;
