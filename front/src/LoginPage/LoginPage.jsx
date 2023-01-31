import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from "react-router-dom";

import cls from "./LoginPage.module.css";
import icon from "./UserIcon.svg";
import { fetchAuth, selectIsAuth } from '../redux/slices/auth.js';


const LoginPage = (props) => {

  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      email: 'mashakun@gmail.com',
      password: '1111111',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(data);

    if (!data.payload) {
      return alert('No authorization');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('No authorization');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }


  return (
    <div className={cls.LoginPage}>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.EnterForm}>
        <img src={icon} alt="" className={cls.Icon} />

        <input type="email" error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          required className={cls.LoginInput}></input>

        <input type="text" error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          required className={cls.PasswordInput}></input>

        <button type="submit" className={cls.EnterButton}>
          SIGN IN
        </button>
        <button className={cls.NewButton} onClick={() => navigate("/register")}>
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
