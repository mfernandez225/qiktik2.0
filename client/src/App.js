import React from "react";
import Chat from "./components/Chat";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import StockTile from "./components/StockTile";
import Ticker from "./components/Ticker";
import SideNavbar from "./components/sideNavbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Search />
      <Chat />
      <Favorites />
      <Ticker />
      <StockTile />
    </div>
  );
}

export default App;
