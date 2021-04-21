import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root:{
  marginTop:10,
  },
toolbar:{
  display: "flex",
    // justifyContent: "space-between",
},
title:{
  marginRight:650,
  fontSize:30,
  // color:"rgb(235, 5, 51)",
  color:"White",

}

}));

export default function NavMinsta() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"
      style={{
        backgroundColor: "transparent",
        color: "white",
        marginBottom: "20px",
      }}>
        <Toolbar className={classes.toolbar}>
          <h2 className={classes.title} >
            Musical Instagram
          </h2>
         
          <div class="container">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
