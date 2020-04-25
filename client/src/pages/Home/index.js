import React, { useState, useEffect } from "react";
import Chat from "../../components/Chat";
import Favorites from "../../components/Favorites";
import Search from "../../components/Search";
import StockTile from "../../components/StockTile";
import Ticker from "../../components/Ticker";
import SideNavbar from "../../components/sideNavbar";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const [selectedStock, setSelectedStock] = useState();

  useEffect(() => {
    if (!selectedStock) return;
    // Look up stock info
    // Store result in state.
  }, [selectedStock]);

  return (
    <Container fluid={true}>
      <Row md="3">
        <Col className="text-left">
          <SideNavbar />
        </Col>
        <Col className="text-center">
          <Search onChange={(stock) => setSelectedStock(stock)} />
          {selectedStock && <StockTile selectedStock={selectedStock} />}
          <Favorites />
          <Ticker />
          <sAndPoor />
          <Chat />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
