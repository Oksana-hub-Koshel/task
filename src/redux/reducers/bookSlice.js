import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import BookstoreService from "../../services/bookstore-service";


const initialState = {
    books: [],
    loading: true,
    error: null,

};

export const fetchBooks=createAsyncThunk(
    'books/fetchBooks',
    async (_,{rejectWithValue, dispatch})=>{
        // const res=await axios.get('https://jsonplaceholder.typicode.com/users')
        // dispatch( fetchBooksSuccess(res.data))
        dispatch(fetchBooksRequest())
        BookstoreService.getBooks()
            .then((data)=>{
                dispatch(fetchBooksSuccess(data))
            })
            .catch((error)=>{
                dispatch(fetchBooksFailed(error))
            })
    })


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        fetchBooksRequest: (state, action) => {
            return {
                books:[],
                loading: true,
                error: null
            }
        },
        fetchBooksSuccess: (state, action) => {
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        },
        fetchBooksFailed: (state, action) => {
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        },

        extraReducers: {
            [fetchBooks.fulfilled]: () => console.log("ful"),
            [fetchBooks.pending]: () => console.log("ful"),
            [fetchBooks.rejected]: () => console.log("ful")
        }
    },
});

export const {fetchBooksRequest, fetchBooksSuccess, fetchBooksFailed} = bookSlice.actions;
export default bookSlice.reducer;