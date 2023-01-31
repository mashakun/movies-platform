import React from "react";
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import cls from "./MovieName.module.css";
import { setCurrItem, fetchUpdateElement, fetchDeleteElement } from "../../../../../redux/slices/lists.js";

const MovieName = (props) => {

  const currItem = useSelector((state) => state.lists.items.all[props.id]);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [editing, setEditing] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      movieName: currItem.movieName,
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    if (values.movieName !== currItem.movieName) {
      const data = await dispatch(fetchUpdateElement({
        id: currItem._id,
        checked: currItem.checked, movieName: values.movieName, heart: currItem.heart
      }));
      console.log(data);
    }
    setEditing(false);
  };

  useEffect(() => {

    const handleClick = async () => {
      dispatch(setCurrItem(currItem));
    };

    const handleDblClick = () => {
      setEditing(true);
      console.log('list dblclicked');
    };

    const element = ref.current;
    element.addEventListener('click', handleClick);
    element.addEventListener('dblclick', handleDblClick);

    return () => {
      element.removeEventListener('click', handleClick);
      element.removeEventListener('dblclick', handleDblClick);
    };
  }, []);

  const onDelete = async () => {
    const data = await dispatch(fetchDeleteElement({id: currItem._id}));
    console.log("Deleted: ", data);
  }


  return (
    <div ref={ref}>
      {
        editing ?
          <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text"
              {...register('movieName', { required: 'Set name' })}
              required></input>

            <button type="submit">
              ok
            </button>
            <button onClick={onDelete}>
              delete
            </button>
          </form>
          :
          <div className={cls.Name}>{props.movieName}</div>
      }
    </div>

  );
};

export default MovieName;
