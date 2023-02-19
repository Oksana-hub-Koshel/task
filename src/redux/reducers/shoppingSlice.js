import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    orderTotal: 0
};


const updateOrder = (state, book, quanity) => {
    const {id}=book
    const {cartItems} = state
    const itemIndex = cartItems.findIndex((item) => item.id === id)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quanity)

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)

    }
}
const updateCartItem=(book, item={}, quanity)=>{
    console.log(book)
    const {
        id=book.id,
        title=book.title,
        count=0,
        total=0,
    }=item

    return{
        id,
        title,
        count: count + quanity,
        total: total+quanity*book.price

    }}

const updateCartItems=(cartItems, item, idx)=>{

    if(item.count===0){                        // удаляет существующий элемент с амассива
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx+1)
        ]
    }

    if(idx === -1){                  // добавляет элемент в массив
        return [
            ...cartItems,
            item
        ]
    }
    else {
        return [
            ...cartItems.slice(0, idx),    // изменяет элемент в массиве
            item,
            ...cartItems.slice(idx+1)
        ]

    }
}

const shoppingSlice=createSlice({
    name: "cart",
    initialState,
    reducers: {
        bookAddedToCart:(state, action) =>{
            return updateOrder(state, action.payload, +1)


        },
        bookRemoveFromCart: (state, action) =>{
            return updateOrder(state, action.payload, -1)
        },
        deleteAllBooksFromCart: (state, action)=>{
            const item=state.cartItems.find(({id})=> id===action.payload.id)
            return updateOrder(state, action.payload, -item.count)
        }
    }
})
export const {bookAddedToCart,bookRemoveFromCart,deleteAllBooksFromCart} = shoppingSlice.actions;
export default shoppingSlice.reducer