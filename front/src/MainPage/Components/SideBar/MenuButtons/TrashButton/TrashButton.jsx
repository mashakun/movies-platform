import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import cls from "./TrashButton.module.css";
import { fetchDeleteList } from "../../../../../redux/slices/lists.js";

const TrashButton = (props) => {

  const dispatch = useDispatch();
  const currList = useSelector((state) => state.lists.lists.curr);

  const onClick = async () => {
    if (currList) {
      const data = await dispatch(fetchDeleteList({id: currList._id}));
    }
  };

  return (
    <button class={cls.TrashButton} onClick={onClick}></button>
  );
};

export default TrashButton;
