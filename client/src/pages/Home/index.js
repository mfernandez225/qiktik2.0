import React, { useState, useEffect } from "react";
import Chat from "../../components/Chat";
import Favorites from "../../components/Favorites";
import Search from "../../components/Search";
import StockTile from "../../components/StockTile";
import Ticker from "../../components/Ticker";
import SideNavbar from "../../components/sideNavbar";
import { Container, Row, Col } from "reactstrap";
import useAuth from "../../utils/use-auth";
import API from "../../utils/API";

const Home = () => {
  const { loginRequired } = useAuth();
  const [selectedStock, setSelectedStock] = useState();
  const [favoriteStocks, setFavoriteStocks] = useState([]);

  useEffect(() => {
    loginRequired();
  }, [loginRequired]);

  useEffect(() => {
    API.getFavorites().then(({ data: favorites }) => {
      setFavoriteStocks(favorites);
    });
  }, []);

  return (
    <Container fluid={true} className="min-vh-100">
      <Row md="3">
        <SideNavbar favoriteStocks={favoriteStocks} />
        <Col className="text-center">
          <Search onChange={(stock) => setSelectedStock(stock)} />
          {selectedStock && (
            <StockTile
              selectedStock={selectedStock}
              favoriteStocks={favoriteStocks}
              setFavoriteStocks={setFavoriteStocks}
            />
          )}
          <sAndPoor />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
