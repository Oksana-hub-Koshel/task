import {configureStore} from '@reduxjs/toolkit';
import bookSlice from "./reducers/bookSlice";
import shoppingSlice from "./reducers/shoppingSlice"


const store = configureStore({
    reducer: {
        books: bookSlice,
        cart: shoppingSlice,
    },
});
export default store