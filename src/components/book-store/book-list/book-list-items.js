import React from 'react';
import s from "./book-list.module.css";
import BookListItem from "../book-list/book-list-item";
import {useSelector} from "react-redux";


const BookListItems = () => {
    const books=useSelector(state=>state.books.books)


    return (
        <ul>
            {books.map((book)=>{
                return(
                    <li key={book.id} className={s.lists}>
                        <BookListItem  book={book} />
                    </li>
                )
            })}

        </ul>
    );
};

export default BookListItems;