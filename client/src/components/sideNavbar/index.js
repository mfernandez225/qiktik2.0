import React from "react";
import { Nav, NavLink } from "reactstrap";
import Logout from "../LogoutButton/index";
import SAndPoor from "../sAndPoor/index";
import DOW from "../dOW/index";
const SideNavbar = ({ favoriteStocks }) => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between bg-secondary p-3">
      <div className="text-left">
        <h1 className="text-light">QikTik</h1>
        <SAndPoor />
        <DOW />
        <hr />
        <h5 className="text-light">Saved Stocks / Favorites</h5>
        <Nav vertical>
          {favoriteStocks.map(({ symbol }) => (
            <p key={symbol}>{symbol}</p>
          ))}
        </Nav>
        <hr />
        <h5 className="text-light">News / Brokerage Links</h5>
        <Nav vertical>
          <NavLink className="text-dark" href="https://robinhood.com/">
            Robinhood
          </NavLink>
          <NavLink className="text-dark" href="https://www.cnn.com/business">
            CNN Business
          </NavLink>
          <NavLink className="text-dark" href="https://finance.yahoo.com/">
            Yahoo Finance
          </NavLink>
          <NavLink className="text-dark" href="https://www.wsj.com/">
            WSJ
          </NavLink>
          <NavLink className="text-dark" href="https://www.forbes.com/">
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
