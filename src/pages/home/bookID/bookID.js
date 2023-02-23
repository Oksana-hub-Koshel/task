import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import s from "./bookID.module.css"
import data from "./../../../mocks/carousel/data.json"



const BookId = () => {
    const location = useLocation();
    const { from } = location.state;
    const [bookId, setBookId]=useState([])


        useEffect(() => {
            data.map((elem)=>{
            console.log(elem.id)
            const el=elem.id===from
            console.log(el)
        })}
        , [from]);



    return (
        <div className={s.container}>
            <div className={s.left_side}>
                <img src={bookId.image}/>
            </div>
            <div className={s.right_side}>
                <div>
                    {bookId.title}
                </div>
                <div>
                    {bookId.author}
                </div>
                <div>
                    {bookId.price}
                </div>



            </div>
        </div>
    );
};

export default BookId;