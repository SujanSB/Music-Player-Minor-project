import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./upload.css";
import { getCookie } from "../helpers/auth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  browseBtn: {
    marginTop: 20,
  },
}));

function UploadHere() {
  const classes = useStyles();

  const [originalName, setOGname] = useState("");
  const [genre, setgenre] = useState("");
  const [caption, setcaption] = useState("");
  const [musicSrc, setmusicSrc] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const onPostUpload = () => {
    const token = getCookie("token");

    axios
      .post(
        `http://localhost:5000/api/post/createpost`,
        { originalName, genre, caption, musicSrc, thumbnail },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => console.log("successfully posted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Outer_here">
      <h2>Upload your musical post here</h2>
      <div className="inner_here">
        <div className="upperin">
          Original Music name :
          <input
            className="input"
            name="originalName"
            value={originalName}
            onChange={(e) => setOGname(e.target.value)}
          />
        </div>
        <div className="upperin">
          Genre :
          <input
            className="input"
            name="genre"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
          />
        </div>
        <div className="upperin">
          Caption :
          <input
            className="input"
            name="caption"
            vale={caption}
            onChange={(e) => setcaption(e.target.value)}
          />
        </div>

        <div className="btnflex">
          <input
            type="file"
            multiple
            accept="audio/x-mpeg-3,audio/mpeg"
            className={classes.browseBtn}
            name="musicSrc"
            value={musicSrc}
            onChange={(e) => setmusicSrc(...musicSrc,e.target.files[0])}
          />
          <input
            accept="image/png,image/jpeg"
            type="file"
            className={classes.browseBtn}
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>
      </div>
      <div className={classes.halnebtn}>
        <Button variant="outlined" color="secondary" onClick={onPostUpload}>
          upload
        </Button>
      </div>
    </div>
  );
}

export default UploadHere;
