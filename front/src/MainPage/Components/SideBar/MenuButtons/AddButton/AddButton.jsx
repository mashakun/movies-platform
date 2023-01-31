import React from "react";
import { useDispatch} from 'react-redux';

import cls from "./AddButton.module.css";
import { fetchCreateList } from "../../../../../redux/slices/lists.js";

const AddButton = () => {

  const dispatch = useDispatch();
  const onClick = async () => {
    const data = await dispatch(fetchCreateList({
      listName: "New list",
    }));
    console.log(data);
  };

  return (
      <button class={cls.AddButton} onClick = {onClick}></button>      
  );
};

export default AddButton;
