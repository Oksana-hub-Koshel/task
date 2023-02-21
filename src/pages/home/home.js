import React from 'react';
import BookListContainer from "../../components/book-store/book-list/book-list-container";
import data from "../../mocks/carousel/data.json"
import Carousel from "../../components/carousel/carousel";
const Home = () => {
    return (
        <div>
            <BookListContainer />
        </div>
    );
};

export default Home;