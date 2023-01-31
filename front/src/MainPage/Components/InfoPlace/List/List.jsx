import React from "react";
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import cls from "./List.module.css";
import { setCurrList, fetchUpdateList, fetchGetList } from "../../../../redux/slices/lists.js";

const List = (props) => {

  const ref = useRef(null);
  const [editing, setEditing] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      listName: props.list.listName,
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    if (values.listName !== props.list.listName) {
      const data = await dispatch(fetchUpdateList({ id: props.list._id, listName: values.listName }));
      console.log(data);
    }
    setEditing(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {

    const handleClick = async () => {
      dispatch(setCurrList(props.list));
      const data = await dispatch(fetchGetList({ id: props.list._id}));
      console.log(data);
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


  return (
    <div className={cls.List} ref={ref}>
      {editing ?
        <form onSubmit={handleSubmit(onSubmit)} className={cls.List} >
          <input type="text" error={Boolean(errors.listName?.message)}
            helperText={errors.listName?.message}
            {...register('listName', { required: 'Set name' })}
            required className={cls.nameInput}></input>

          <button type="submit" className={cls.Edited}>
            ok
          </button>
        </form>
        :
        <div className={props.chosen ? cls.mid_free : cls.mid_active}>
          {props.list.listName}
        </div>}

    </div>
  );

};

export default List;