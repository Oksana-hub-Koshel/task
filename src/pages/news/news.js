import React, {useCallback, useEffect, useState} from 'react';
import s from "./news.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom';
import img from "./../../mocks/nbc-social-default.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import ErrorIndicator from "../../components/error-indicator/error-indicator";
import Spinner from "../../components/spinner/spinner";
import {fetchNews, newRemoveFromCard} from "../../redux/reducers/newsSlice";



const News = () => {
    const news=useSelector(state=>state.news.news)
    const error=useSelector(state=> state.news.error)
    const loading=useSelector(state=>state.news.loading)
    const dispatch = useDispatch();
    const {t, i18n}=useTranslation()
    const [renderElements, setRenderElements]=useState([])
    const [count, setCount]=useState(1)

    const inc=()=>{
        setCount(count+1)
    }

    const deleteItem=(id)=>{
        const del=renderElements.filter((item)=>item.id !==id)
        setRenderElements([...del])
    }

    useEffect(()=>{
        dispatch(fetchNews())

      // NewsStoreService.getAllNews().then((res)=>{
      //       setElements([...res])
      //   })


    }, [])

    useEffect(()=> {
        if(news.length > 0){
            setRenderElements([...news.slice(0,3*count)])
        }
    }, [news,count])



    if(error){
        return <ErrorIndicator/>
    }

    if(loading){
        return <Spinner />
    }


    return (
         <>
        <div className={s.wrapp}>

            <div className={s.container_cards}>
                {renderElements && renderElements.map((item,index)=> {
                    return (
                        <Card key={index} sx={{ maxWidth: 400  }} className={s.card}>

                            <img src={img} className={s.image}/>

                            <CardContent>
                                <div style={{display:"flex", gap:5, color:"gray", marginBottom:5}}>
                                    <StarBorderIcon/>
                                    <Typography>{item.rating.rate}</Typography>
                                </div>

                                <Typography className={s.title_block} gutterBottom variant="h5" component="div" style={{fontSize:15, marginTop:20, marginBottom:20, height:50,  fontFamily: "Source Sans Pro"}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={s.descrip_text} style={{fontFamily: "Source Sans Pro", fontSize:12}} >
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions className={s.manage_panel}>
                                <div className={s.manage_panel_block}>
                                    <Link
                                        to={`/products/${item.id}`}
                                        state={{ from: `${item.id}` }} style={{textDecoration:"none"}}>
                                        <Button size="small" style={{color:'black', fontWeight:"bolder", fontSize:10}}>{t("Read more")}</Button>
                                    </Link>
                                    <EastIcon className={s.icon} style={{width:15, height:10}}/>
                                </div>
                                <div className={s.manage_panel_block}>
                                    <Button onClick={()=>deleteItem(item.id)} size="small" style={{color:'black', fontWeight:"bolder", fontSize:10}}>{t("Delete")}</Button>
                                   <DeleteOutlineIcon className={s.icon} style={{width:15, height:20}}/>

                                </div>

                            </CardActions>
                        </Card>
                    )
                    }
                )}


            </div>

        </div>
    <Button onClick={inc}  className={s.load_button} style={{marginTop:40, color:"inherit"}}>{t("Get more")}</Button>

         </>
     );
};

export default News;