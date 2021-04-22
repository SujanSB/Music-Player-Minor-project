import React, { useState, useEffect } from "react";
import "./Profilepage.css";
// import { Button } from '@material-ui/core';
import UpMusic from "./UpMusic";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import UploadHere from "./UploadHere";
import { updateUser, isAuth, getCookie, signout } from "../helpers/auth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import energy from "./music/energy.mp3";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CountrySelect from "./CountrySelect";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";

import validator from "validator";

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Profile({ history }) {
  const [errorMessage, setErrorMessage] = useState("");

  const validateDate = (value) => {
    if (validator.isDate(value)) {
      setErrorMessage("Valid Date :)");
    } else {
      setErrorMessage("Enter Valid Date!");
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [count, setCount] = useState(0);

  const ClickHandler = () => {
    setCount(count + 1);
  };

  const DbclickHandeler = () => {
    setCount(count - 1);
  };

  //try gAREKO start

  const [personData, setPersonData] = useState({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    Bio: "",
    ProfilePic: "",
    Gender: "",
    DateOfBirth: "",
    Location:{
      Country: "",
      Street: "",
      City: "",

    },
    textChange: "Update",
    role: "",
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
          role,
          fname,
          Bio,
          ProfilePic,
          lname,
          email,
          Gender,
          Location: { City, Country, Street },
          DateOfBirth,
        } = res.data;
        // const {City,
        //   Country,
        //   Street} =Location;
        console.log(fname);
        setPersonData({
          ...personData,
          role,
          ProfilePic,
          fname,
          lname,
          Bio,
          email,
          Gender,
          Location: {
            City,
            Country,
            Street,
          },
          DateOfBirth,
        });
        console.log(personData);
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push("/login");
            console.log(
              " ta yo thau ma yo bato hudai aako hos" + history.location
            );
          });
        }
      });
  };
  useEffect(() => {
    loadProfile();
    console.log("kei hudaixa hai");
  }, []);

  const {
    fname,
    lname,
    email,
    password1,
    ProfilePic,
    textChange,
    Bio,
    role,
    Gender,
    Location: { City, Country, Street },
    DateOfBirth,
  } = personData;
  const handleChange = (text) => (e) => {
    setPersonData({ ...personData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    const token = getCookie("token");
    e.preventDefault();
    setPersonData({ ...personData, textChange: "Submitting" });
    axios
      .put(
        `http://localhost:5000/api/user/update`,
        {
          fname: fname,
          lname: lname,
          email: email,
          Bio: Bio,
          ProfilePic: ProfilePic,
          password: password1,
          Location: {
            City: City,
            Country: Country,
            Street: Street,
          },
          Gender: Gender,
          DateOfBirth: DateOfBirth,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(personData);
        updateUser(res, () => {
          toast.success("Profile Updated Successfully");
          setPersonData({ ...personData, textChange: "Update" });
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //try gAREKO ENd

  return (
    <>
      <ToastContainer />

      <div className="Profilepage">
        <div className="Upper-Part">
          <div className="image-part">
            {/* <img src="https://cdn.pixabay.com/photo/2018/11/30/07/11/male-3847134__340.jpg" /> */}
            <div className="imgWrapper">
              <img src={ProfilePic} />
            </div>
          </div>
          <div className="info-part">
            <div className="name">
              <h2>
                {fname}&nbsp;
                {lname}
              </h2>
            </div>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClickOpen}
            >
              Edit Profile
            </Button>

            <div className="po-fol-fow">
              <h3>
                25 <span>posts</span>
              </h3>
              <h3>
                504 <span>followers</span>
              </h3>
              <h3>
                449 <span>following</span>
              </h3>
            </div>
            <div className="Short_bio">
              <p> {Bio}</p>
            </div>
          </div>
        </div>
        <hr />

        {/* try hunexa yaha start */}

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          className="dialog"
          maxWidth={"md"}
          fullWidth={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="dialog-title"
          >
            Edit Profile
          </DialogTitle>
          <DialogContent dividers className="dialog-vitrako">
            <form
              className="w-full flex-1 mt-8 text-blue-700"
              onSubmit={handleSubmit}
              className="form"
            >
              <div className="mx-auto max-w-xs relative ">
                <TextField
                  id="outlined-secondary"
                  label="Who are You?"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="name"
                  placeholder="Role"
                  fullWidth
                  value={role}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your email :"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="email"
                  placeholder="Email"
                  fullWidth
                  value={email}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your first name :"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="name"
                  fullWidth
                  value={fname}
                  onChange={handleChange("fname")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your last name :"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="name"
                  fullWidth
                  value={lname}
                  onChange={handleChange("lname")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your bio :"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="name"
                  fullWidth
                  value={Bio}
                  onChange={handleChange("Bio")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Change the password ?"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="password"
                  fullWidth
                  value={password1}
                  onChange={handleChange("password1")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your Country Name:"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  value={Country}
                  onChange={handleChange("Country")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your City Name:"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  value={City}
                  onChange={handleChange("City")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Your Street Name:"
                  variant="outlined"
                  color="secondary"
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  value={Street}
                  onChange={handleChange("Street")}
                />
                <TextField
                  id="outlined-secondary"
                  label="Photo's Link"
                  variant="outlined"
                  color="secondary"
                  className="input-field"
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  value={ProfilePic}
                  onChange={handleChange("ProfilePic")}
                />
                <h3 style={{ color: "black" }}>Date Of Birth:</h3>
                <TextField
                  id="outlined-secondary"
                  label=""
                  variant="outlined"
                  color="secondary"
                  className="input-field"
                  autoFocus
                  margin="dense"
                  type="date"
                  fullWidth
                  value={DateOfBirth}
                  onChange={handleChange("DateOfBirth")}
                />
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={Gender}
                  onChange={handleChange("Gender")}
                >
                  <h3 style={{ color: "black" }}>Gender:{Gender}</h3>

                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                    style={{ color: "black" }}
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="female"
                    style={{ color: "black" }}
                  />
                </RadioGroup>
                {/* <CountrySelect/> */}

             
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-red-300 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">{textChange}</span>
                </button>
              </div>
            </form>
          </DialogContent>
          <DialogActions className="dialog-bottom">
            <Button
              autoFocus
              onClick={handleClose}
              variant="outlined"
              color="secondary"
            >
              Save changes
            </Button>
          </DialogActions>
        </Dialog>

        {/* try hunexa yaha End */}

        <hr />
        <UploadHere />
        <hr />
        <div className="Lower-part">
          <div className="Lower-Oneside">
            <div className="My-Post">
              <h2>My Post</h2>
            </div>
            <div className="your-uploads">
              <div className="upload">
                <UpMusic />
                <div className="l_c">
                  <FavoriteIcon
                    style={{ fontSize: "30px", marginRight: "20px" }}
                    onClick={ClickHandler}
                    onDoubleClick={DbclickHandeler}
                  />
                  <CommentIcon style={{ fontSize: "30px" }} />
                </div>
                <h4>{count} Likes</h4>
                <div className="comment">
                  <p>
                    <span>Santosh :</span> Very Nice Song
                  </p>
                  <input />
                </div>
              </div>
              <hr />
              <div className="upload">
                <UpMusic />
                <div className="l_c">
                  <FavoriteIcon
                    style={{ fontSize: "30px", marginRight: "20px" }}
                  />
                  <CommentIcon style={{ fontSize: "30px" }} />
                </div>
                <h4>0 Likes</h4>
                <div className="comment">
                  <p>
                    <span>Santosh :</span> Very Nice Song
                  </p>
                  <input />
                </div>
              </div>

              <hr />
            </div>
          </div>
          <div className="Lower-Anotherside">
            <div className="My-Favourite">
              <h2>Fovourite Music</h2>

              <div className="single-music-layer">
                <div className="sm-inner">
                  <img src="https://media.images.yourquote.in/post/large/0/0/11/969/x6Zz5241.jpg" />
                  <div className="para-add">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                    <h3> I got so faar</h3>
                  </div>
                </div>

                <div>
                  <audio controls>
                    <source src={energy} autoPlay loop />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
