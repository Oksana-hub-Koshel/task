import React from 'react';
import BookListContainer from "../../components/book-store/book-list/book-list-container";
import Carousel from "../../components/carousel/carousel";
import {useNavigate} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";
import "./home.css"
import {useSelector} from "react-redux";



const Home = () => {
    const cart = useSelector((state) => state.cart.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    const navigate=useNavigate()
    return (
        <div>
            <Carousel />
            <BookListContainer />

            <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <ShoppingCart id='cartIcon'/>
                <p>{getTotalQuantity() || 0}</p>
            </div>
        </div>
    );
};

export default Home;