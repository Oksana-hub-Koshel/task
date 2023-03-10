import React, {useState} from 'react';
import s from "./login.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()
    const {t, i18n}=useTranslation()
    const [error, setError] = useState(false)
    const fromPage = location.state?.from?.pathname || '/'


    const onLoginHandler = (e) => {
        e.preventDefault()
        const form = e.target
        let userNew = {
            name: form.username.value,
            password: form.password.value

        }
        if (userNew.name.toLowerCase() === "admin" && userNew.password === "12345") {
            setError(false)
            localStorage.setItem('auth', JSON.stringify(userNew))
            signIn(userNew, () => navigate(fromPage, {replace: true}))
        } else {
            setError(true)
        }
    }


    return (
        <div className={s.block_list}>
            <h3 style={{textAlign: "center"}}>{t("Login into your account")}</h3>

            <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '50ch' },

        }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => onLoginHandler(e)} className={s.form}
            >
                <TextField id="filled-basic" name="username" label={t("Name")} variant="filled" style={{backgroundColor: "aliceblue"}}  />
                {error ? <p>Name is invalid</p> : null}
                <TextField id="filled-basic" name="password" label={t("Password")} variant="filled" style={{backgroundColor: "aliceblue",}} />
                {error ? <p>Password is invalid</p> : null}
                <button type="submit" className={s.button_sub} style={{width:150, height:40, fontSize:20}}>{t("Login")}</button>
            </Box>


        </div>
    );

}

export default Login;