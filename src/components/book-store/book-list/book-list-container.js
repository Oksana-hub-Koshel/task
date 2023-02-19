import React, {useEffect, useState} from 'react';
import s from "./book-list.module.css";
import { useDispatch, useSelector} from "react-redux";
import CartTable from "../cart-table/cart-table";
import Spinner from "../../spinner/spinner";
import ErrorIndicator from "../../error-indicator/error-indicator";
import BookListItems from "../book-list/book-list-items";
import {fetchBooks } from "../../../redux/reducers/bookSlice"
import BookListHeader from "./book-list-header";

const BookListContainer = () => {
    const error=useSelector(state=> state.books.error)
    const loading=useSelector(state=>state.books.loading)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBooks())

    }, [])

    if(error){
        return <ErrorIndicator/>
    }

    if(loading){
        return <Spinner />
    }

    return (
        <>
            <BookListHeader/>
            <BookListItems />
            <CartTable/>
        </>
    );

};



export default BookListContainer;