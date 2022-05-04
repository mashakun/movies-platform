import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx"
import SideBar from "./Components/SideBar/SideBar.jsx"
import ListPlace from "./Components/ListPlace/ListPlace.jsx"
import InfoPlace from "./Components/InfoPlace/InfoPlace.jsx";

const App = () => {
  return (
    <div class="wrapper">
      <Header />
      <SideBar />
      <ListPlace />
      <InfoPlace />
    </div>
  );
};

export default App;
