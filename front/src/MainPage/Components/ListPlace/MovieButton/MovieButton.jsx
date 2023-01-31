import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import cls from "./MovieButton.module.css";
import { fetchCreateElement } from "../../../../redux/slices/lists.js";

const MovieButton = (props) => {

  const dispatch = useDispatch();
  const onClick = async () => {
  console.log("currlist: ", props.listId);
      const data = await dispatch(fetchCreateElement({
        movieName: "New item",
        listId: props.listId,
      }));
      console.log(data);
  };

  return (
    <div className={cls.button_place}>
      <button className={cls.MovieButton} onClick = {onClick}></button>
    </div>
  );
};

export default MovieButton;
