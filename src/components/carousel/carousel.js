import React from 'react';
import data from "../../mocks/carousel/data.json";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import s from "./carousel.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";

const Carousel = () => {
    const {t, i18n}=useTranslation()
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 4,
        speed: 500
    };
    return (
        <div className={s.wrapp}>
        <div>{t("Our Bestsellers:")}</div>
        <Slider {...settings}>
            {data &&
                data.map(item => {
                    return (
                        <>
                            <Link
                                to={`/books/${item.id}`}
                                state={{from: `${item.id}`}}
                                key={item.id}>
                                <div className={s.image}>
                                    <img src={item.image} />
                                </div>
                                <div>
                                    <h4 className={s.goods_name}>
                                        {item.name}
                                    </h4>
                                </div>
                            </Link>
                        </>
                    );
                })}
        </Slider>
        </div>
    )

};

export default Carousel;



