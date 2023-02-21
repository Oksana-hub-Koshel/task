import React, {useContext, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

import "./header.css"
import {useTranslation} from "react-i18next";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Header = () => {
    const {t, i18n}=useTranslation()
    const navigate=useNavigate()


    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    const [language, setLanguage] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{marginLeft: 100}}>
                    <NavLink className="navbar-brand" to="/">BStore</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">{t("home")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">{t("news")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">{t("profile")}</NavLink>
                            </li>
                        </ul>
                        <div className="lang_buttons">

                            {/*<Button onClick={()=>changeLang("en")}>EN</Button>*/}
                            {/*<Button onClick={()=>changeLang("ua")}>UA</Button>*/}
                            <div >

                                <FormControl sx={{ m: 0.1, minWidth: 80 }} size="small" >
                                    <InputLabel id="demo-controlled-open-select-label"  style={{color:"white"}} >Lang</InputLabel>
                                    <Select

                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={language}
                                        label="Lang"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"en"}>EN</MenuItem>
                                        <MenuItem value={"ua"}>UA</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <Link to="/cart" className="btn btn-secondary my-2 my-sm-0">My cart</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

