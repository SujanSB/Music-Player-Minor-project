import React from "react";
import NavMinsta from "./NavMinsta";
import UpMusic from "./UpMusic";
import "./Musicinsta.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Musicinsta(props) {
  const { fname, lname, ProfilePic, email } = props;
  return (
    <div>
      <NavMinsta className="sticky" />
      <div className="MInsta-home">
        <div className="inner-home">
          <div className="inner-post">
            <div className="kasko-post">
              <div className="ko-ho">
                <img src="https://cdn.pixabay.com/photo/2018/04/13/07/44/siblings-3315770__340.jpg" />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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

            {/* <hr /> */}
            <div className="kasko-post">
              <div className="ko-ho">
                <img />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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
            {/* <hr /> */}
            <div className="kasko-post">
              <div className="ko-ho">
                <img />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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
            {/* <hr /> */}
            <div className="kasko-post">
              <div className="ko-ho">
                <img />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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
            {/* <hr /> */}
            <div className="kasko-post">
              <div className="ko-ho">
                <img />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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
            <div className="kasko-post">
              <div className="ko-ho">
                <img />
                <div className="name-date">
                  <h4>Shshasnk Dhungel</h4>
                  <p>2 days ago </p>
                </div>
              </div>
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

          <div className="tyahi">
            <div className="inner-pro-sugg">
              <Link to="/profile">
                <div className="aafno-thorai">
                  <img src={ProfilePic} />
                  <div className="aafno-n-e">
                    <h3>
                      {fname} {lname}
                    </h3>
                    <p>{email}</p>
                  </div>
                </div>
              </Link>
              <div className="suggestion-profile">
                <h2>Suggestions For You</h2>
                <div className="suggeested-list">
                  <div className="aruko-thorai">
                    <img src="" />
                    <div className="aruko-n-e">
                      <p>InvalidSB</p>
                      <p>Invalidsb45@gmail.com</p>
                    </div>
                  </div>

                  <div className="aruko-thorai">
                    <img src="" />
                    <div className="aruko-n-e">
                      <p>InvalidSB</p>
                      <p>Invalidsb45@gmail.com</p>
                    </div>
                  </div>

                  <div className="aruko-thorai">
                    <img src="" />
                    <div className="aruko-n-e">
                      <p>InvalidSB</p>
                      <p>Invalidsb45@gmail.com</p>
                    </div>
                  </div>
                </div>
                <Button variant="outlined" color="secondary">
                  SEE ALL
                </Button>
              </div>
              {/* //some bottom text */}
              <div className="Bottom_text">
                <div className="mathi-kei-linkharu">
                  <Link>
                    <p>About</p>
                  </Link>
                  <Link>
                    <p>Help</p>
                  </Link>
                  <Link>
                    <p>Terms</p>
                  </Link>
                  <Link>
                    <p>Policy</p>
                  </Link>
                  <Link>
                    <p>Top Account</p>
                  </Link>
                  <Link>
                    <p>Languages</p>
                  </Link>
                </div>
                <div className="copyright">
                  <h2> &#169; MusicInsta From initDevelops</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Musicinsta;
