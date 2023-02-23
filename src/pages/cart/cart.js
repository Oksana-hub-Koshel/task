import React from 'react';
import Total from "../../components/total/total";
import "./cart.css"
import {useSelector} from "react-redux";
import CartItem from "./cartItem/cartItem";
import {useTranslation} from "react-i18next";

const Cart = () => {
    const {t, i18n}=useTranslation()
    const cart = useSelector((state) => state.cart.cart)
    return (
        <div className="cart">
            <div className="cart__left">
                <div>
                    <h3>{t("Shopping Cart")}</h3>
                </div>
                {cart?.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </div>

            <div className="cart__right">
                <Total/>
            </div>

        </div>
    );
};

export default Cart;