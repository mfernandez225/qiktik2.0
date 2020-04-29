import React, { useState, useEffect } from "react";
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
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=INX&apikey=" +
        process.env.REACT_APP_ALPHAVANTAGE_KEY
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result["Global Quote"]["05. price"]);
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
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <li> S&P= {items.slice(0, -2)}</li>;
  }
};
export default SAndPoor;
