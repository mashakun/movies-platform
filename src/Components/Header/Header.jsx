import React from "react";
import cls from "./Header.module.css";
import GlobalButton from "./GlobalButton/GlobalButton.jsx";
import ListName from "./ListName/ListName.jsx";

const Header = () => {
  return (
    <div className={cls.Header}>
      <GlobalButton />
      <GlobalButton />
      <ListName />
    </div>
  );
};

export default Header;
