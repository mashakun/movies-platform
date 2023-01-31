import React from "react";
import cls from "./Header.module.css";
import SettingsButton from "./SettingsButton/SettingsButton.jsx";
import UserButton from "./UserButton/UserButton.jsx";
import ListName from "./ListName/ListName.jsx";

const Header = () => {
  return (
    <div className={cls.Header}>
      <SettingsButton />
      <UserButton />
      <ListName listName="My first list (omg)" />
    </div>
  );
};

export default Header;
