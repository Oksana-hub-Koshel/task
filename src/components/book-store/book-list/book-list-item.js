import React from 'react';
import s from "./book-list.module.css"
import {useDispatch} from "react-redux";
import {bookAddedToCart} from "../../../redux/reducers/shoppingSlice";
import {useTranslation} from "react-i18next";

const BookListItem = ({book}) => {
    const {title, author, price, image, id}=book;
    const dispatch=useDispatch()
    const {t, i18n}=useTranslation()


    const onAddedToCart=(book)=>{
        dispatch(bookAddedToCart(book))
    }

    return (
        <div className={s.book_block}>
            <div>
                <img src={image} className={s.img_book}/>
            </div>
            <div className={s.info_book}>
                <span style={{fontSize:22, color:"wheat"}}>{title}</span>
                <span style={{fontSize:18,}}>{author}</span>
                <span style={{fontSize:20, }}>$ {price}</span>
                <button className="btn-outline-primary"
                        onClick={()=>onAddedToCart(book)}
                        style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>{t("Add to Cart")}</button>

            </div>
        </div>
    );
};

export default BookListItem;