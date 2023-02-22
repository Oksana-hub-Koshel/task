import React from 'react';
import s from "./book-list.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Total, {getTotal} from "../../total/total";
import {useSelector} from "react-redux";

const BookListHeader = () => {
    const cart=useSelector(state=> state.cart.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
    }

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
                        <p className="total__p">
                            {getTotal().totalQuantity} {t("items")}
                            : <strong>${getTotal().totalPrice}</strong>
                        </p>

                    </div>
                </Link>



            </div>
            <hr></hr>
        </>
    );
};

export default BookListHeader;