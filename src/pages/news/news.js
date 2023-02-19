import React from 'react';
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
import {useNews} from "../../hooks/useNews";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const News = () => {
     const {news, loading, error}=useNews();
    console.log(news)

     return (
         <>
        <div className={s.wrapp}>

            <div className={s.container_cards}>
                {news && news.map((item)=> {
                    return (
                        <Card sx={{ maxWidth: 400  }} className={s.card}>

                            <img src={img} className={s.image}/>

                            <CardContent>
                                <div style={{display:"flex", gap:5, color:"gray", marginBottom:5}}>
                                    <StarBorderIcon/>
                                    <Typography>{item.rating.rate}</Typography>
                                </div>

                                <Typography gutterBottom variant="h5" component="div" style={{fontSize:18, marginTop:20, marginBottom:20, height:40,  fontFamily: "Source Sans Pro"}}>

                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={s.descrip_text} style={{fontFamily: "Source Sans Pro"}} >
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions className={s.manage_panel}>
                                <div className={s.manage_panel_block}>
                                    <Link
                                        to={`/products/${item.id}`}
                                        state={{ from: `${item.id}` }} style={{textDecoration:"none"}}>
                                        <Button size="small" style={{color:'black', fontWeight:"bolder", fontSize:10}}>Read more</Button>
                                    </Link>
                                    <EastIcon className={s.icon}/>
                                </div>
                                <div className={s.manage_panel_block}>
                                    <Button size="small" style={{color:'black', fontWeight:"bolder", fontSize:10}}>Delete new</Button>
                                   <DeleteOutlineIcon className={s.icon}/>
                                </div>

                            </CardActions>
                        </Card>
                    )
                    }
                )}


            </div>

        </div>
    <Button className={s.load_button} style={{marginTop:40, color:"inherit"}}>Get more</Button>
         </>
     );
};

export default News;