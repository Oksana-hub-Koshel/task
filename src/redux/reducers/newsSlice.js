import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import NewsStoreService from "../../services/news-service";
import axios from "axios";




const initialState = {
    news: [],
    loading: true,
    error: null,

};

export const fetchNews=createAsyncThunk(
    'news/fetchNews',
    async (_,{rejectWithValue, dispatch})=>{
        dispatch(fetchNewsRequest())
        NewsStoreService.getAllNews()
            .then((data)=>{
                dispatch(fetchNewsSuccess(data))
            })
            .catch((error)=>{
                dispatch(fetchNewsFailed(error))
            })
    })




const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchNewsRequest: (state, action) => {
            return {
                news: [],
                loading: true,
                error: null
            }
        },
        fetchNewsSuccess: (state, action) => {
            return {
                news: action.payload,
                loading: false,
                error: null
            }
        },
        fetchNewsFailed: (state, action) => {
            return {
                news: [],
                loading: false,
                error: action.payload
            }
        },

        extraReducers: {
            [fetchNews.fulfilled]: () => console.log("ful"),
            [fetchNews.pending]: () => console.log("pen"),
            [fetchNews.rejected]: () => console.log("rej")
        }
    }

})

export const {fetchNewsRequest, fetchNewsSuccess, fetchNewsFailed, newRemoveFromCard} = newsSlice.actions;
export default newsSlice.reducer