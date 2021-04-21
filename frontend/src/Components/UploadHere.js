import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './upload.css'
import Browse from './Browse'
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    
    },
    browseBtn:{
      marginTop:20  ,
    }
  }));


function UploadHere() {
  const classes = useStyles();

    return (
        <div className="Outer_here">
          <h2>Upload your musical post here</h2>
            <div className="inner_here">
                <div>Enter Music name :<input className="input"/></div>
                <div>Enter Singer name :<input className="input"/></div>
                <Button variant="contained" color="primary" className={classes.browseBtn}>Browse Music</Button>
                {/* <Browse/> */}
            </div>
                <div className={classes.halnebtn}>
                  <Button variant="outlined" color="secondary" >upload</Button>
                </div>
        </div>
    )
}

export default UploadHere
