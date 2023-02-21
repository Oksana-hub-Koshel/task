import {configureStore} from '@reduxjs/toolkit';
import bookSlice from "./reducers/bookSlice";
import shoppingSlice from "./reducers/shoppingSlice"
import newsSlice from "./reducers/newsSlice";



const store = configureStore({
    reducer: {
        books: bookSlice,
        cart: shoppingSlice,
        news: newsSlice
    },
});
export default store