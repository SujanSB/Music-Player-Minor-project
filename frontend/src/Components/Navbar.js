import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, ListItem, ListItemText } from "@material-ui/core";
// import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import './Navbar.css'
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
  tool: {
    display: "flex",
    justifyContent: "space-between",
  },

 
 
  profile: {
    height: "40px",
    width: "40px",
    float: "right",
  },
  profileBtn: {
    textDecoration: "none",
    color: "",
    // backgroundColor:"#00001a",
    padding: 10,
    fontSize: 30,
  },
  
}));

function Navbar( props ) {

  console.log("Navbar ko props",props)

  const {
    fname,
    lname,
    ProfilePic,
   
  } = props;

const searchBar =props.searchBar 
if(searchBar== 'true'){
  const SearchBar = true
}
// console.log(searchBar)
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "transparent",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Toolbar className={classes.tool}>
          <div
            className={classes.search}
            >
            <MusicNoteOutlinedIcon style={{backgroundColor:"none"}}></MusicNoteOutlinedIcon>
          </div>
          {searchBar == "true" ?

<div class="container">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
</div>: null
        
        }
          <Link to="/profile">
            <Chip
              avatar={
                <Avatar
                  alt={fname}
                  src={ProfilePic}
                  style={{size:50}}
                />
              }
              clickable
              label={fname +" "+ lname}
              variant="outlined"
              color="secondary"
              className={classes.profileBtn}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
