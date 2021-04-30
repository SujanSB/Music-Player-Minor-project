import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './upload.css'

import { updateUser, isAuth, getCookie, signout } from "../helpers/auth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
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


function UploadHere({ history }) {
  const classes = useStyles();
  const [selectedSrc,setSelectedSrc]=useState(null)

  const onFileChange = event => {
    setSelectedSrc( event.target.files[0])
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] });
  
  };
 const onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      selectedSrc,
      selectedSrc.name
    );
  
    // Details of the uploaded file
    console.log(selectedSrc);
  
    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };
  const fileData = () => {
    
    if (selectedSrc) {
       
      return (
        <div>
          <h2>File Details:</h2>
           
<p>File Name: {selectedSrc.name}</p>

           
{/* <p>File Type: {this.state.selectedSrc.type}</p> */}

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };











//   const [personData, setPersonData] = useState({
//     uploadDetail: {
//            ogname:"",
//            covbyname:"",
//            postImage:"",
//            postSrc:""
//          },
//  });

//  const loadProfile = () => {
//    const token = getCookie("token");

//    axios
//      .get(`http://localhost:5000/api/user/${isAuth()._id}/posts`, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      })
//      .then((res) => {
//        const {
     
//          uploadDetail: {
//            ogname,
//            covbyname,
//            postImage,
//            postSrc
//          },
//        } = res.data;
//        setPersonData({
//          ...personData,
       
//          uploadDetail: {
//            ogname,
//            covbyname,
//            postImage,
//            postSrc
//          },
        
//        });
//        console.log(personData);
//      })
//      .catch((err) => {
//        toast.error(`Error To Your Information ${err.response.statusText}`);
//        if (err.response.status === 401) {
//          signout(() => {
//            history.push("/login");
//            console.log(
//              " ta yo thau ma yo bato hudai aako hos" + history.location
//            );
//          });
//        }
//      });
//  };
//  useEffect(() => {
//    loadProfile();
//    console.log("kei hudaixa hai");
//  }, []);

//  const {
//    uploadDetail: {
//      ogname,
//      covbyname,
//      postImage,
//      postSrc
//    },
  
//  } = personData;
//  const handleChange = (text) => (e) => {
//    setPersonData({ ...personData, [text]: e.target.value });
//  };
//  const handleSubmit = (e) => {
//    const token = getCookie("token");
//    e.preventDefault();
//    setPersonData({ ...personData, textChange: "Submitting" });
//    axios
//      .put(
//        `http://localhost:5000/api/user/${isAuth()._id}/posts`,
//        {
        
//          uploadDetail: {
//            ogname: ogname,
//            covbyname: covbyname,
//            postImage: postImage,
//            postSrc:postSrc
//          }
//        },
//        {
//          headers: {
//            Authorization: `Bearer ${token}`,
//          },
//        }
//      )
//      .then((res) => {
//        console.log(personData);
//        updateUser(res, () => {
//          toast.success("Profile Updated Successfully");
//          setPersonData({ ...personData, textChange: "Update" });
//        });
//      })
//      .catch((err) => {
//        console.log(err.response);
//      });
//  };











    return (
        <div className="Outer_here">
          <h2>Upload your musical post here</h2>
            <div className="inner_here">
                <div className="upperin">Original Music name :<input className="input" /></div>
                <div className="upperin">Cover Singer name :<input className="input" /></div>
                <div className="btnflex">
                <input type="file"  className={classes.browseBtn}/>
                <input type="file"  className={classes.browseBtn}/>
                {/* <button onClick={onFileUpload}/> */}
                {/* <Button variant="contained" color="secondary" className={classes.browseBtn}>Browse Music</Button> */}
                {/* <Button variant="contained" color="primary" className={classes.browseBtn}>Browse Photo</Button> */}
                </div>
                {/* <Browse/> */}
            </div>
                <div className={classes.halnebtn}>
                  <Button variant="outlined" color="secondary" onClick={onFileUpload} >upload</Button>
                </div>
        </div>
    )
}

export default UploadHere
