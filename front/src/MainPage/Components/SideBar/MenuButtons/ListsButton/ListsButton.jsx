import React from "react";
import { useDispatch} from 'react-redux';

import cls from "./ListsButton.module.css";
import { fetchGetAllLists } from "../../../../../redux/slices/lists.js";

const ListsButton = (props) => {  

  const dispatch = useDispatch();
  const onClick = async () => {
    const data = await dispatch(fetchGetAllLists());
    console.log(data);
  };

  return (
      <button class={cls.ListsButton} onClick = {onClick}></button>
  );
};

export default ListsButton;
