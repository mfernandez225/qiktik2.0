import React from "react";
import Chat from "./components/Chat";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import StockTile from "./components/StockTile";
import Ticker from "./components/Ticker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>QikTik</h1>
      <Search />
      <Chat />
      <Favorites />
      <Ticker />
      <StockTile />
    </div>
  );
}

export default App;
