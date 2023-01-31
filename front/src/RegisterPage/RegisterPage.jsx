import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";

import cls from "./RegisterPage.module.css";
import { fetchRegister, selectIsAuth } from '../redux/slices/auth.js';

const RegisterPage = (props) => {

    const isAuth = useSelector(selectIsAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: "name",
            email: "email",
            login: "login",
            password: "password",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    return (
        <div class={cls.RegisterPage}>
            <form onSubmit={handleSubmit(onSubmit)} class={cls.EnterForm}>
                <input
                    type="text"
                    error={Boolean(errors.name?.message)}
                    helperText={errors.name?.message}
                    {...register("name", { required: "Write name" })}
                    required
                    className={cls.NameInput}
                ></input>

                <input
                    type="email"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register("email", { required: "Укажите почту" })}
                    required
                    className={cls.MailInput}
                ></input>

                <input
                    type="login"
                    error={Boolean(errors.login?.message)}
                    helperText={errors.login?.message}
                    {...register("login", { required: "Укажите почту" })}
                    required
                    className={cls.LoginInput}
                ></input>

                <input
                    type="text"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль" })}
                    required
                    className={cls.PasswordInput}
                ></input>

                <button
                    type="submit"
                    className={cls.EnterButton}
                >
                    SEND
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
