import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  
} from "@material-ui/core";
// import EmojiSymbolsIcon from "@material-ui/icons/EmojiSymbols";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Home from "./Home";
import Musicinsta from "./Musicinsta";
import Profile from "./Profile";
import PlayList from "./PlayList";


// import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import SearchS from "./SearchS";
import Pop from "./Catg/Pop";





import axios from "axios";
import {  isAuth, getCookie, signout } from "../helpers/auth";

const useStyles = makeStyles((theme) => ({
  
  bgcolor: {
    backgroundColor: "#0d0d0d",
    padding:0,margin:0,
  },
  drawerPaper: { width: "inherit", backgroundColor:  "#000000", color: "white" ,margin:0},
  link: {
    textDecoration: "none",
    color: "white",
  },

  container: {
  backgroundColor: "#0d0d0d",
    color: "white",
    padding: "0px",
  },
  containerply: {
  backgroundColor: "red",
    color: "white",
    paddingLeft: "220px",
    marginLeft: "220px",
    width:"500px"
  },
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
    MuiContainer:{
      width:"100%"
    }


  },
  Musicinsta:{
    color:"gray",
    fontSize:22,
  },
  signout:{
    color:"rgb(235, 5, 51)",
    top:10,
    fontSize:25,
    
  },
  signoutplace:{
    position:'absolute',
    marginTop:200,

  },
  search:{
    color:'gray',
    fontSize:28
  }

}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function InnerApp({history}) {
 const [personData, setPersonData] = useState({
    fname: "",
    lname: "",
    ProfilePic:"",
   
  });
  const loadProfile = () => {
    const token = getCookie("token");

    axios
      .get(`http://localhost:5000/api/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const {
          fname,
          lname,
          ProfilePic,
          email,


        } = res.data;
       
        setPersonData({
          ...personData,
          fname,
          lname,
          ProfilePic,
          email,

        });
      })
      .catch((err) => {
        toast.error(`Sorry ,Due to some internet Issue we couldnot load your information ${err.response.statusText}`);
      
      });
  };
  useEffect(() => {
    loadProfile();
  }, []);
const {
    fname,
    lname,
    ProfilePic,
    email,


  } = personData;


  const classes = useStyles();
  return (
    <div className={classes.bgcolor}>
      <Router>
        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: "240px" }}
            variant="permanent"
            anchor="left"
            open={true}
            maxWidth={'lg'}
            classes={{ paper: classes.drawerPaper }}
          >
            <h1 style={{ width: "95%", height: "50px",fontSize:30,fontFamily: 'Parisienne',textAlign:"center",fontWeight:"bold" ,padding:"10px" }}>Advance M P</h1>
            <List>
              <Link to="/inner" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                  <HomeIcon style={{ color: "gray",fontSize:30 }} />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              <Link to="/searchs" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <SearchIcon className={classes.search}/>

                  </ListItemIcon>
                  <ListItemText primary={"SearchS"} />
                </ListItem>
              </Link>
              </Link>
              <Link to="/musicinsta" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <FeaturedPlayListIcon className={classes.Musicinsta}></FeaturedPlayListIcon>
                  </ListItemIcon>
                  <ListItemText primary={"MusicInsta"} />
                </ListItem>
              </Link>
              <hr></hr>
              <button
                onClick={() => {
                  signout(() => {
                    toast.error("Signout Successfully");

                    history.push("/login");
                  });
                }}
                className="signoutplace"
              >
               
                 <Link to="/" >
                <ListItem button>
                  <ListItemIcon>
                <ExitToAppIcon className={classes.signout}></ExitToAppIcon>
                  </ListItemIcon>
                  <ListItemText primary={"SignOut"} />
                </ListItem>
              </Link>
              </button>
             
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/inner">
              <Container className={classes.container}>
                <Home fname={fname} lname={lname} ProfilePic={ProfilePic}/>
              </Container>
            </Route>
            <Route exact path="/musicinsta">
              <Container className={classes.container}>
                <Musicinsta fname={fname} lname={lname} ProfilePic={ProfilePic} email= {email}/>
              </Container>
            </Route>
            <Route exact path="/searchs">
              <Container className={classes.container}>
                <SearchS fname={fname} lname={lname} ProfilePic={ProfilePic}/>
              </Container>
            </Route>
            
            <Route exact path="/playlist">
              <Container className={classes.containerply}>
                <PlayList />
              </Container>
            </Route>
            <Route exact path="/profile">
              <Container><Profile /></Container>
            </Route>
            <Route exact path="/Pop">
              <Container><Pop fname={fname} lname={lname} ProfilePic={ProfilePic}/></Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default InnerApp;
