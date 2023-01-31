import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cls from "./Watched.module.css";
import { setCurrItem,  fetchUpdateElement} from "../../../../../redux/slices/lists.js";

const Watched = (props) => {

  const currItem = useSelector((state) => state.lists.items.all[props.id]);
  const [isChecked, setChecked] = React.useState(currItem.checked);
  const dispatch = useDispatch();
  

  const onChange = async () => {
    setChecked(!isChecked); 
    dispatch(setCurrItem(currItem));
    const data = await dispatch(fetchUpdateElement({id: currItem._id, checked: !isChecked,
       movieName: currItem.movieName, heart: currItem.heart}));
    console.log("Checked: ", data);
  }
  

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
      />
      <span
        class={isChecked ? cls.checkedTrue : cls.checkedFalse}
        aria-hidden="true"
      /> 
    </label>
  );
};

export default Watched;
