import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import "./style.css";

require("dotenv").config();
const SAndPoor = () => {
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SDY&apikey=" +
        process.env.REACT_APP_ALPHAVANTAGE_KEY
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result["Global Quote"]) {
            setItems(result["Global Quote"]["05. price"]);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="fontMe">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="fontMe">Loading...</div>;
  } else {
    return (
      <Card body id="cBody" className="text-center p-5 m-2">
        <CardTitle id="lrg" className="fontMeSmall">
          {items.slice(0, -2)}
        </CardTitle>
        <CardText id="med" className="fontMe">
          SandP
        </CardText>
      </Card>
    );
  }
};
export default SAndPoor;
