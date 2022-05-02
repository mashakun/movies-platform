import React from "react";
import "./App.css";
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import ListPlace from "./Components/ListPlace"
import InfoPlace from "./Components/InfoPlace";

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
