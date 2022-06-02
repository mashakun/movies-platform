import React from "react";
import cls from "./ListName.module.css";

const ListName = (props) => {
  return (
      <item className={cls.Name}>{props.listName}</item>
  );
};

export default ListName;
