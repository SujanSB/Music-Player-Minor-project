import React from "react";
import Navbar from "../Navbar";
import "./Pop.css";
import "../App.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Button } from "@material-ui/core";

function Pop(props) {
  const {fname,lname,ProfilePic}= props

  console.log("aayo yahi");
  return (
    <div className="PopScreen">
      <Navbar searchBar="false" fname={fname} lname={lname} ProfilePic={ProfilePic} />
      <div>
        <div className="popupperPart">
          <h1 className="PopHead">Pop</h1>
        </div>
        <hr></hr>
        <div className="lower-musiclist">
          <div className="Cat-ASL">
            <h2>Popular Playlists</h2>
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
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text
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
      </div>
    </div>
  );
}

export default Pop;
