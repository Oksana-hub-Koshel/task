import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import s from "./bookID.module.css"
import data from "./../../../mocks/carousel/data.json"



const BookId = () => {
    const location = useLocation();
    const { from } = location.state;
    const [bookId, setBookId]=useState([])

    useEffect(() => {
            data.find((elem)=>{
                if(Number(elem.id)===Number(from)){
                    setBookId(elem)
                }


        })}
        , [from,data]);

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
                    Author: {bookId.author}
                </div>
                <div>
                    {bookId.description}
                </div>
                <div>
                    Price: {bookId.price}$
                </div>



            </div>
        </div>
    );
};

export default BookId;