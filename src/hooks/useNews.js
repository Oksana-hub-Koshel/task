import {useEffect, useState} from "react";
import API from "../services/news-service"

export const useNews=()=>{
    const [news, setNews]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')



    useEffect(() => {
        setError('')
        setLoading(true)
        API.getAllNews()
            .then((data)=>{
                setNews(data)
                setLoading(false)

            })
            .catch((error)=>{
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return{
        news,
        loading,
        error
    }
}