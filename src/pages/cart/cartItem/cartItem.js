import './cartItem.css'
import {useDispatch} from "react-redux";
import {bookRemoveFromCart, decrementQuantity, incrementQuantity} from "../../../redux/reducers/shoppingSlice";
import Button from "@mui/material/Button";

function CartItem({id, image, title, price, quantity=0}) {
const dispatch=useDispatch()
    return (
        <div className="cartItem">
            <img className="cartItem__image" src={image} alt='item'/>

            <div className="cartItem__info">
                <p className="cartItem__title">{title}</p>
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='cartItem__incrDec'>
                    <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                </div>
                <Button className='cartItem__removeButton' onClick={() => dispatch( bookRemoveFromCart(id))}>Remove</Button>
            </div>
        </div>
    )
}

export default CartItem