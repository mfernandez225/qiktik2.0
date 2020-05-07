import React, { useState, useEffect } from "react";
import Search from "../../components/Search";
import StockTile from "../../components/StockTile";
import SideNavbar from "../../components/sideNavbar";
import { Container, Row, Col } from "reactstrap";
import useAuth from "../../utils/use-auth";
import API from "../../utils/API";
import SAndPoor from "../../components/sAndPoor/index";
import DOW from "../../components/dOW/index";
import News from "../../components/News/News";
import "./style.css";
// loginRequired coming from useAuth in utils folder, ensuring that the user can't access qiktik without being logged in.

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
    <Container fluid={true} i>
      <Row md="3">
        {/* User is selecting and displaying favorite stocks from stock tile to side navbar */}
        <Col xs="12" s="5" md="3" lg="3" style={{ marginLeft: "-15px" }}>
          <SideNavbar
            favoriteStocks={favoriteStocks}
            setFavoriteStocks={setFavoriteStocks}
            setSelectedStock={setSelectedStock}
          />
        </Col>

        <Col className="text-center" md="9" sm="12">
          <Row className="justify-content-center">
            <SAndPoor />
            <DOW />
          </Row>

          <Search onChange={(stock) => setSelectedStock(stock)} />
          {selectedStock && (
            <StockTile
              selectedStock={selectedStock}
              favoriteStocks={favoriteStocks}
              setFavoriteStocks={setFavoriteStocks}
            />
          )}
          <News />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
