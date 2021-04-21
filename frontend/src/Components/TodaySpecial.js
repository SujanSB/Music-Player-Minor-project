import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import 'react-jinke-music-player/assets/index.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { BrowserRouter as  Route, Link } from "react-router-dom";
import {
    Container,
  } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    toptoday:{
        width:"90%",
        margin:"auto",
        backgroundColor:"endregion",
        display:"flex",
        justifyContent:"left",
        

    },
    vado:{
        width:'180px',
        height:'180px',
    },
    round:{
        position:"relative",
        zIndex:1,
        borderRadius:"50%",
        backgroundColor:'red'
    },
    sidedetails:{
        alignContent:"center",
        placeItems:"center",
        padding:"20px"
    },
    img:{
        width:'180px',
        height:'180px',
        position:"center",
        objectFit:"cover",
        border:"0.5px solid #ffff",
    }
    
}))
function TodaySpecial() {
  const classes = useStyles();

  



    return (
        <div  className={classes.toptoday}>
            
            <div className={classes.vado}>
                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7WXmaD8-kQ6T3U0I4JtFx3dvt8krIFt079A&usqp=CAU" />
            </div>
            <div className={classes.sidedetails}>
                <h3>Mix</h3>
                <p>Here are today's top trendng songs -A Musical pack..</p>
              <Link to="/playlist" className={classes.profileBtn}>
                <PlayCircleFilledIcon style={{fontSize:"60px"}}/>
              </Link>
            </div>
            
        </div>
    )
}

export default TodaySpecial
