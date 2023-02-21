import React from 'react';
import s from "./cart-teble.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
    bookAddedToCart,
    bookRemoveFromCart,
    deleteAllBooksFromCart
} from "../../../redux/reducers/shoppingSlice"
import {useTranslation} from "react-i18next";

const CartTable = () => {
    const dispatch=useDispatch();
    const {t, i18n}=useTranslation()
    const items=useSelector(state=> state.cart.cartItems)

    return (
        <div className={s.wrapp}>
            <h4>{t("Your Order")}</h4>

            <div className={s.table}>
                <table className={s.table_1}>
                    <thead className={s.head_table}>
                    <tr>
                        <th>#</th>
                        <th>{t("Item")}</th>
                        <th>{t("Count")}</th>
                        <th>{t("Total")} </th>
                        <th>{t("Action")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items && items.map((item, idx)=>{
                        console.log(item)
                        const {id, title, count, total}=item
                        return(
                            <tr key={id}>
                                <td>{idx+1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>$ {total}</td>
                                <td className={s.command_line}>
                                    <i className="bi bi-dash-circle" onClick={()=>dispatch(bookRemoveFromCart(item))}></i>
                                    <i className="bi bi-plus-circle" onClick={()=>dispatch(bookAddedToCart(item))}></i>
                                    <i className="bi bi-trash3" onClick={()=>dispatch( deleteAllBooksFromCart(item))}></i>
                                </td>
                            </tr>
                        )
                    })}


                    </tbody>
                </table>
                <div className={s.total}>
                    <h5>Total:{items.total} $</h5>
                    <button className="btn-outline-primary" style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>{t("Checkout")}</button>
                </div>

            </div>


        </div>
    );
};

export default CartTable;