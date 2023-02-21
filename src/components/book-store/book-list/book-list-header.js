import React from 'react';
import s from "./book-list.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const BookListHeader = () => {
    const count=2
    const {t, i18n}=useTranslation()
    return (
        <>
            <div className={s.header_wrapp}>
                <Link to="/">
                    <h2>BStore</h2>
                </Link>
                <Link to="/cart">
                    <div className={s.cart_icon}>
                        <i className="bi bi-bag-check-fill" style={{color: "wheat"}}></i>
                        <div> 5 {t("items", {count})} (200 $)</div>

                    </div>
                </Link>

            </div>
            <hr></hr>
        </>
    );
};

export default BookListHeader;