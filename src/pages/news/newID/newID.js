import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import s from "./../news.module.css"
import StarBorderIcon from "@mui/icons-material/StarBorder";

const NewId = () => {
    const location = useLocation();
    const { from } = location.state;
    const [info, setInfo]=useState([])

    useEffect(() => {
        if (from) {
            axios.get(`https://fakestoreapi.com/products/${from}`).then((response) => {
                setInfo(response.data);
            });
        }
    }, [from]);


    console.log(info)

    return (
        <>
        <div className={s.block_info}>
            <h2>{info.title}</h2>
            <div>{info.description}</div>
        </div>
    <div className={s.rating_block}>
        <StarBorderIcon/>
        Price: {info.price}
    </div>
        </>
    );
};

export default NewId;