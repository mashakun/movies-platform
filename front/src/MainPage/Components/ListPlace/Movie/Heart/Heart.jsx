import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cls from "./Heart.module.css";
import { setCurrItem, fetchUpdateElement } from "../../../../../redux/slices/lists.js";

const Heart = (props) => {

  const currItem = useSelector((state) => state.lists.items.all[props.id]);
  const dispatch = useDispatch();

  const HEART_STATES = {
    CLEAR: "Clear",
    LIKED: "Liked",
    DISLIKED: "Disliked",
  };

  let getState = (currState) => {
    switch (currState) {
      case "Clear":
        return HEART_STATES.CLEAR;
      case "Liked":
        return HEART_STATES.LIKED;
      default:
        return HEART_STATES.DISLIKED;
    }
  };

  const [state, setState] = React.useState(getState(currItem.heart));
  
  let changeState = (currState) => {
    if (currState === HEART_STATES.CLEAR) {
      return HEART_STATES.LIKED;
    } else if (currState === HEART_STATES.LIKED) {
      return HEART_STATES.DISLIKED;
    } else return HEART_STATES.CLEAR;
  };

  let getStyleByState = (currState) => {
    switch (currState) {
      case "Clear":
        return cls.clear;
      case "Liked":
        return cls.liked;
      default:
        return cls.disliked;
    }
  };
  

  const onChange = async () => {
    const newState = changeState(state);
    setState(newState);
    dispatch(setCurrItem(currItem));
    const data = await dispatch(fetchUpdateElement({id: currItem._id, checked: currItem.checked,
       movieName: currItem.movieName, heart: newState}));
    console.log("Heart: ", data);
  }

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
      />
      <span class={getStyleByState(state)} aria-hidden="true" />
    </label>
  );
};

export default Heart;
