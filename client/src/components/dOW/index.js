import React, { useState, useEffect } from "react";

const DOW = () => {
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("api call")
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
    return <li> DOW= {items.slice(0, -2)}</li>;
  }
};
export default DOW;
