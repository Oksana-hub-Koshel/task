import { createSlice } from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        bookAddedToCart: (state, action) => {
            console.log(action)
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        bookRemoveFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
    },
});

export default shoppingSlice.reducer;
export const {
    bookAddedToCart,
    incrementQuantity,
    decrementQuantity,
    bookRemoveFromCart,
} = shoppingSlice.actions;




// import {createSlice} from "@reduxjs/toolkit";
//
//
// const initialState = {
//     cartItems:[],
//     orderTotal: []
// };
//
//
// const updateOrder = (state, book, quanity) => {
//     console.log(book)
//
//     const {id, price}=book
//     const {cartItems} = state
//     const itemIndex = cartItems.findIndex((item) => item.id === id)
//     const item = cartItems[itemIndex]
//     const newItem = updateCartItem(book, item, quanity)
//     console.log(newItem)
//     return {
//         orderTotal:
//             Number(newItem.count)>0
//             ? Number(newItem.count) * Number(price)
//             : book.price,
//
//         cartItems: updateCartItems(cartItems, newItem, itemIndex)
//
//     }
// }
// const updateCartItem=(book, item={}, quanity)=>{
//     console.log(book)
//     const {
//         id=book.id,
//         title=book.title,
//         count=0,
//         total=0,
//     }=item
//
//     return{
//         id,
//         title,
//         count: Number(count )+ Number(quanity),
//         total: Number(total)+Number(quanity)*Number(book.price),
//         // sum: book.price * orderTotal[i]
//
//     }}
//
// const updateCartItems=(cartItems, item, idx)=>{
//
//     if(item.count===0){                        // удаляет существующий элемент с амассива
//         return [
//             ...cartItems.slice(0, idx),
//             ...cartItems.slice(idx+1)
//         ]
//     }
//
//     if(idx === -1){                  // добавляет элемент в массив
//         return [
//             ...cartItems,
//             item
//         ]
//     }
//     else {
//         return [
//             ...cartItems.slice(0, idx),    // изменяет элемент в массиве
//             item,
//             ...cartItems.slice(idx+1)
//         ]
//
//     }
// }
//
// const shoppingSlice=createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         bookAddedToCart:(state, action) =>{
//             console.log(action.payload)
//             return updateOrder(state, action.payload, +1)
//
//
//         },
//         bookRemoveFromCart: (state, action) =>{
//             return updateOrder(state, action.payload, -1)
//         },
//         deleteAllBooksFromCart: (state, action)=>{
//             const item=state.cartItems.find(({id})=> id===action.payload.id)
//             return updateOrder(state, action.payload, -item.count)
//         }
//     }
// })
// export const {bookAddedToCart,bookRemoveFromCart,deleteAllBooksFromCart} = shoppingSlice.actions;
// export default shoppingSlice.reducer