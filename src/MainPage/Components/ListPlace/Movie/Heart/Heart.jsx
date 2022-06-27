import React from "react";
import cls from "./Heart.module.css";

const Heart = () => {
  const HEART_STATES = {
    CLEAR: "Clear",
    LIKED: "Liked",
    DISLIKED: "Disliked",
  };
  const [state, setState] = React.useState(HEART_STATES.CLEAR);
  
  let changeState = (currState) => {
    if (currState === HEART_STATES.CLEAR) {
      return HEART_STATES.LIKED;
    } else if (currState === HEART_STATES.LIKED) {
      return HEART_STATES.DISLIKED;
    } else return HEART_STATES.CLEAR;
  };

  let getState = (currState) => {
    switch (currState) {
      case "Clear":
        return cls.clear;
      case "Liked":
        return cls.liked;
      default:
        return cls.disliked;
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setState(changeState(state));
        }}
      />
      <span class={getState(state)} aria-hidden="true" />
    </label>
  );
};

export default Heart;
