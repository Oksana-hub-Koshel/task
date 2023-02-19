import React from 'react';
import s from "./cart-teble.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
    bookAddedToCart,
    bookRemoveFromCart,
    deleteAllBooksFromCart
} from "../../../redux/reducers/shoppingSlice"

const CartTable = () => {
    const dispatch=useDispatch();

    const items=useSelector(state=> state.cart.cartItems)

    return (
        <div className={s.wrapp}>
            <h4>Your Order</h4>

            <div className={s.table}>
                <table className={s.table_1}>
                    <thead className={s.head_table}>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total Amount</th>
                        <th>Action</th>
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
                    <button className="btn-outline-primary" style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>Checkout</button>
                </div>

            </div>


        </div>
    );
};

export default CartTable;