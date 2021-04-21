import React,{useEffect,useState} from "react";
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


function Home(props) {
  console.log("aayo?",props)
  const audiolist = [
    {
      cover: musicCover,
      musicSrc: energy,
      name: "Energy in blood",
      singer: "Sujan",
    },
  ];
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
  let CurrentMoment
  
  function GetData(){
    let currentTime = currentDate.getHours();
    if (currentTime < 12) 
      CurrentMoment= "Morning";
     else if (currentTime > 12 && currentTime < 18  ) 
      CurrentMoment= "Afternoon";
     else {
      CurrentMoment= "Night";
    }
    return CurrentMoment
  }
  GetData()

 

  const {
    fname,
    lname,
    ProfilePic
  } = props;




  return (
    <div className="Home">
      <Navbar searchBar="false" fname={fname} lname={lname} ProfilePic={ProfilePic}/>
      <ToastContainer />

      <div>
        <h2>Top Trending </h2>

        <TodaySpecial />
      </div>
      <hr style={{ margin: "30px 0px" }} />

      <div className="categorized">
        <h2>{KunBar} {CurrentMoment} </h2>
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
              <audio controls>
                <source src={energy} autoPlay loop />
              </audio>
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
              <audio controls>
                <source src={energy} autoPlay loop />
              </audio>
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
              <audio controls>
                <source src={energy} autoPlay loop />
              </audio>
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
              <audio controls>
                <source src={energy} autoPlay loop />
              </audio>
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
              <audio controls>
                <source src={energy} autoPlay loop />
              </audio>
            </div>
          </div>
        </div>

        <div style={{ alignContent: "right", marginTop: "20px" }}>
          <Button variant="contained" color="secondary">
            SEE ALL
          </Button>
        </div>
      </div>
      {/* playlist nai dekhaune aba chai */}

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
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
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
        <h2>More Like V-Ten</h2>
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
        <h2>Made For {fname} {lname}</h2>
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
        <h2>Spotify Playlist</h2>
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
