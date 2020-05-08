import React from "react";
import { Nav, NavLink, Media, Row } from "reactstrap";

import Logout from "../LogoutButton/index";

import API from "../../utils/API";
import logoo from "../../assets/imgs/Qteal.png";
import "./style.css";

const SideNavbar = ({
  favoriteStocks,
  setFavoriteStocks,
  setSelectedStock,
}) => {
  const handleDelete = async (favoriteStock) => {
    const response = await API.deleteFavorite(favoriteStock);
    setFavoriteStocks(response.data);
  };
  return (
    <div
      id="navie"
      className="d-flex flex-column  justify-content-between  p-3"
    >
      {/* LOGO IMAGE - css: tabs: alignment, logo: sizing, fontMe: big font, fontMeSmall: small font*/}
      <div className="text-left text-white tabs">
        <Row className="center ml-2">
      <Media center >
              <Media object src={logoo} alt="qiktik" id="Logoo" />
        </Media>
        </Row>
        <hr />
        <h5 className="text-light fontMe">Tracked Stocks</h5>
        {/* Displaying users selected favorite stocks */}
        <Nav vertical>
          <div id="overflow">
            {favoriteStocks.map((favoriteStock) => (
              <div key={favoriteStock._id}>
                <div className="row">
                  <div className="col">
                    <p
                      id="savedFavoriteStock"
                      className="fontMeSmall"
                      onClick={() => setSelectedStock(favoriteStock)}
                    >
                      {favoriteStock.symbol}
                    </p>
                  </div>
                  <div className="col">
                    <button
                      id="deleteFavoriteStock"
                      onClick={() => handleDelete(favoriteStock)}
                    >
                      <i className="far fa-trash-alt fa-1x"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Nav>

        <hr />
        <h5 className="text-light  fontMe">News / Brokerage Links</h5>
        <Nav vertical>
          <NavLink
            className="text-light fontMeSmall  hoverMe"
            href="https://robinhood.com/"
          >
            Robinhood
          </NavLink>
          <NavLink
            className="text-light fontMeSmall hoverMe"
            href="https://www.cnn.com/business"
          >
            CNN Business
          </NavLink>
          <NavLink
            className="text-light fontMeSmall hoverMe"
            href="https://finance.yahoo.com/"
          >
            Yahoo Finance
          </NavLink>
          <NavLink
            className="text-light fontMeSmall hoverMe"
            href="https://www.wsj.com/"
          >
            WSJ
          </NavLink>
          <NavLink
            className="text-light fontMeSmall hoverMe"
            href="https://www.forbes.com/"
          >
            Forbes
          </NavLink>
        </Nav>
      </div>

      <Nav vertical>
        <Logout />
      </Nav>
    </div>
  );
};

export default SideNavbar;
