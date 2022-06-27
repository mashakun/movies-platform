import React from "react";
import cls from "./Watched.module.css";

const Watched = () => {
  const [isChecked, setChecked] = React.useState(false);
  

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setChecked(!isChecked);
        }}
      />
      <span
        class={isChecked ? cls.checkedTrue : cls.checkedFalse}
        aria-hidden="true"
      /> 
    </label>
  );
};

export default Watched;
