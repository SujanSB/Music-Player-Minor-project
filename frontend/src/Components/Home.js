import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodaySpecial from "./TodaySpecial";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Grid, Button } from "@material-ui/core";
import ReactJKMusicPlayer from "react-jinke-music-player";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "react-jinke-music-player/assets/index.css";
import "./App.css";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import musicCover from "./music/energy.jpg";
import energy from "./music/energy.mp3";
// import zIndex from "@material-ui/core/styles/zIndex";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { ArtistWise } from "./HomeData/ArtistWise";
import { MadeForYou } from "./HomeData/MadeForYou";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Singer = [
  {
    value: "Pramodh_Kharel",
    label: "Pramodh Kharel",
  },
  {
    value: "Narayan_Gopal",
    label: "Narayan Gopal",
  },
  {
    value: "V_Ten",
    label: "V Ten",
  },
  {
    value: "Raju_Lama",
    label: "Raju Lama",
  },
];

const Moods = [
  {
    value: "Focused",
    label: "Focused",
  },
  {
    value: "Sad",
    label: "Sad",
  },
  {
    value: "Happy",
    label: "Happy",
  },
  {
    value: "Fun",
    label: "Fun",
  },
  {
    value: "Angry",
    label: "Angry",
  },
  {
    value: "Chill",
    label: "Chill",
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],

    padding: theme.spacing(6, 8, 6),
  },
  displayflex: {},
  TextField: {
    marginBottom: 50,
  },
  // player modal ko lagi
  playermodalwidth: {
    width: 800,
  },
  musicdetailsom_player:{
    fontFamily:"poppins",
    textAlign:"center",
    marginBottom:20
  }
}));

const Pramodh_Kharel = ArtistWise.PramodKh;
const V_Ten = ArtistWise.VTen;

function Home(props) {
  let currentDate = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const KunMonth = months[currentDate.getMonth()];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const KunBar = days[currentDate.getDay()];
  let CurrentMoment;

  function GetData() {
    let currentTime = currentDate.getHours();
    if (currentTime < 12) CurrentMoment = "Morning";
    else if (currentTime > 12 && currentTime < 18) CurrentMoment = "Afternoon";
    else {
      CurrentMoment = "Night";
    }
    return CurrentMoment;
  }
  GetData();

  const { fname, lname, ProfilePic } = props;

  const classes = useStyles();

  // player modal
  const [playeropen, setPlayeropen] = React.useState(false);
  const [musicData, setMusicData] = React.useState({});
  const handlePlayerOpen = (music) => {
    setPlayeropen(true);
    setMusicData(music.music);
    console.log("music object is", music);
  };

  const handlePlayerClose = () => {
    setPlayeropen(false);
  };

  // user choice modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // handleOpen()
  }, []);

  const [showChoice, setshowChoice] = React.useState(false);
  const [singer, setsinger] = React.useState(Pramodh_Kharel);
  const [mood, setMood] = React.useState("Focused");

  // const [toShowsinger,settoss]=useState()
  const handleChangeS = (event) => {
    setsinger(event.target.value);
  };
  const handleChangeM = (event) => {
    setMood(event.target.value);
  };

  const ChoiceHandler = () => {
    setOpen(false);
    setshowChoice(true);
  };
  console.log(singer);

  // if (singer === Pramodh_Kharel){

  //   const Selectedsinger=Pramodh_Kharel
  // }

  return (
    <div className="Home">
      <Navbar
        searchBar="false"
        backIcon="false"
        fname={fname}
        lname={lname}
        ProfilePic={ProfilePic}
      />
      <ToastContainer />

      {/* Player modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={playeropen}
        onClose={handlePlayerClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={playeropen}>
          <div className={classes.paper}>
            <div className={classes.playermodalwidth}>
              <div className={classes.musicdetailsom_player}>
              <h1 style={{fontSize:25}}><span style={{color:"white",backgroundColor:"green",padding:4,textTransform:"uppercase",marginRight:30}}>{musicData.Singer}'S</span>{musicData.SongName} </h1>
              <p style={{marginTop:10}}>{musicData.SongDetail}</p>
              </div>

              <AudioPlayer
                src={energy}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                // other props here
              />
            </div>
          </div>
        </Fade>
      </Modal>

      <div>
        <h2>Top Trending </h2>

        <TodaySpecial />
      </div>
      <hr style={{ margin: "30px 0px" }} />

      <div className="categorized">
        <h2>
          {KunBar} {CurrentMoment}{" "}
        </h2>
        <div className="cat-cards">
          <div className="musiccard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm7mD3fFiVJ7haQhco81PLCTj4RqgPVxdkhA&usqp=CAU" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Chill Vibes </span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://addicted2success.com/wp-content/uploads/2014/11/wolf-eyes-focused.jpg" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Focused</span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://cdn.pixabay.com/photo/2018/02/12/10/45/heart-3147976__340.jpg" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Love songs</span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://cdn.pixabay.com/photo/2016/09/28/05/12/pokhara-1699787__340.jpg" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  <span> Nepali Songs</span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
        </div>
        <div className="cat-cards">
          <div className="musiccard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm7mD3fFiVJ7haQhco81PLCTj4RqgPVxdkhA&usqp=CAU" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  <span>Hip-Hop </span>
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                    boxShadow: "0 0 3px black",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/08/expression-5040708__340.jpg" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Pop-Songs </span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lDHfVJMxHLk3jc_KhNzgQQHaEW%26pid%3DApi&f=1" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Old Nepali Songs</span>{" "}
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
          <div className="musiccard">
            <img src="https://cdn.pixabay.com/photo/2015/05/15/14/30/guitarist-768532__340.jpg" />
            <div className="catg-desc">
              <div className="title-play">
                <h3>
                  {" "}
                  <span>Love and Romance</span>
                </h3>
                <PlayCircleFilledWhiteIcon
                  style={{
                    fontSize: "45px",
                    marginTop: "-10px",
                    zIndex: 100,
                    color: " #00ff00",
                  }}
                />
              </div>
              <p>
                {" "}
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                very popular during the Renaissance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ margin: "30px 0px" }} />

      {/* Category one 8 songs list */}
      <div className="Cat-ASL">
        <h2>Recently Played</h2>
        <div className="musiclist-box">
          <div className="music-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div>
              <h3> I got so faar</h3>
              <div className="para-add">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ marginLeft: "50px" }}
                >
                  <AddIcon />
                </Fab>
              </div>
              {/* <audio controls>
                <source src={energy} autoPlay loop />
              </audio> */}
              <AudioPlayer
                src={energy}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                // other props here
              />
            </div>
          </div>
          <div className="music-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div>
              <h3> I got so faar</h3>
              <div className="para-add">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ marginLeft: "50px" }}
                >
                  <AddIcon />
                </Fab>
              </div>
              <AudioPlayer
                src={energy}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                // other props here
              />
            </div>
          </div>
          <div className="music-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div>
              <h3> I got so faar</h3>
              <div className="para-add">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ marginLeft: "50px" }}
                >
                  <AddIcon />
                </Fab>
              </div>
              <AudioPlayer
                src={energy}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                // other props here
              />
            </div>
          </div>
          <div className="music-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div>
              <h3> I got so faar</h3>
              <div className="para-add">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ marginLeft: "50px" }}
                >
                  <AddIcon />
                </Fab>
              </div>
              <AudioPlayer
                src={energy}
                onPlay={(e) => console.log("onPlay")}
                layout="horizontal"
                // other props here
              />
            </div>
          </div>
        </div>

        <div style={{ alignContent: "right", marginTop: "20px" }}>
          <Button variant="contained" color="secondary">
            SEE ALL
          </Button>
        </div>
      </div>
      {/* single music  dekhaune ani click huda arko route ma khulne  aba chai */}

      {/* User Selection Part */}
      <div>
        <button type="button" onClick={handleOpen}>
          Your Choice
        </button>
{/* {
  showChoice?
  <div>
    You have Choose {singer}.
  </div>:
  null

} */}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={classes.displayflex}>
                <TextField
                  id="outlined-select-singer-native"
                  select
                  label="Select Singer"
                  value={singer}
                  onChange={handleChangeS}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className={classes.TextField}
                  fullWidth
                >
                  {Singer.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      color="white"
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-mood-native"
                  select
                  label="Select Mood"
                  value={mood}
                  onChange={handleChangeM}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  className={classes.TextField}
                  fullWidth
                >
                  {Moods.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                {/*           
          
          <TextField
          id="outlined-select-singer-native"
          select
          label="Native select"
          value={singer}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select at least one "
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
           */}
                <Button
                  fullWidth
                  color="secondary"
                  variant="outlined"
                  onClick={ChoiceHandler}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>

      {showChoice ? (
        <>
          <div className="Cat-ASL">
            <h2>Focused</h2>
            <div className="musicplaylist-box">
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    style={{ fontSize: "45px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3> I got so faar</h3>
                  <p>Lorem ipsum,</p>
                </div>
              </div>
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    style={{ fontSize: "45px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3> I got so faar</h3>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text
                  </p>
                </div>
              </div>
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    style={{ fontSize: "45px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3> I got so faar</h3>
                  <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
                </div>
              </div>
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    style={{ fontSize: "45px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3> I got so faar</h3>
                  <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
                </div>
              </div>
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    style={{ fontSize: "45px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3> I got so faar</h3>
                  <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
                </div>
              </div>
            </div>

            <div style={{ alignContent: "right", marginTop: "20px" }}>
              <Button variant="contained" color="secondary">
                SEE ALL
              </Button>
            </div>
          </div>

          <div className="Cat-ASL">
            <h2>More Like PramodKh</h2>
            <div className="musicplaylist-box">
              {singer.map((music) => {
                return (
                  <div className="musicList-layer">
                    <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                    <div className="middle">
                      {/* <Link to="/music_player" > */}

                      <PlayCircleFilledWhiteIcon
                    onClick={() => handlePlayerOpen({ music })}
                    style={{ fontSize: "40px", color: " #00ff00" }}
                      />
                      {/* </Link> */}
                    </div>
                    <div>
                      <h3>{music.SongName}</h3>
                      <p>{music.SongDetail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ alignContent: "right", marginTop: "20px" }}>
              <Button variant="contained" color="secondary">
                SEE ALL
              </Button>
            </div>
          </div>
        </>
      ) : null}

      <div className="Cat-ASL">
        <h2>
          Made For {fname} {lname}
        </h2>
        <div className="musicplaylist-box">
          {MadeForYou.map((music) => {
            const { SongName, SongDetail } = music;
            return (
              <div className="musicList-layer">
                <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                <div className="middle">
                  <PlayCircleFilledWhiteIcon
                    onClick={() => handlePlayerOpen({ music })}
                    style={{ fontSize: "40px", color: " #00ff00" }}
                  />
                </div>
                <div>
                  <h3>{SongName}</h3>
                  <p>{SongDetail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ alignContent: "right", marginTop: "20px" }}>
          <Button variant="contained" color="secondary">
            SEE ALL
          </Button>
        </div>
      </div>

      <div className="Cat-ASL">
        <h2>A M P Playlist</h2>
        <div className="musicplaylist-box">
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              </p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
        </div>

        <div style={{ alignContent: "right", marginTop: "20px" }}>
          <Button variant="contained" color="secondary">
            SEE ALL
          </Button>
        </div>
      </div>

      <div className="Cat-ASL">
        <h2>{KunMonth} Month's Top Playlist</h2>
        <div className="musicplaylist-box">
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              </p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
          <div className="musicList-layer">
            <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
            <div className="middle">
              <PlayCircleFilledWhiteIcon
                style={{ fontSize: "40px", color: " #00ff00" }}
              />
            </div>
            <div>
              <h3> I got so faar</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known,</p>
            </div>
          </div>
        </div>

        <div style={{ alignContent: "right", marginTop: "20px" }}>
          <Button variant="contained" color="secondary">
            SEE ALL
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
