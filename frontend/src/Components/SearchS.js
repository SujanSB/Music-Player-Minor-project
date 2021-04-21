import React from 'react'
import Navbar from './Navbar'
import './Search.css'
import { Link } from "react-router-dom";
// import Pop from "./Catg/Pop"
// import{
// Container
  
// } from "@material-ui/core";


function SearchS(props) {
    const {fname,lname,ProfilePic}= props
    return (
        <div className="SearchScreen">
            <Navbar searchBar="true" fname={fname} lname={lname} ProfilePic={ProfilePic}/>

        <div className="Users-genre">
            <div className="heading">
            <h2>Your Top genres</h2>
            </div>
            <div className="gerne-catg">

            <div className='catg1'>
                <Link to="/Pop">
        <h1>Pop</h1>
                </Link>
            </div>
            <div className='catg2'>
            <h1>Folk</h1>

            </div>
            <div className='catg3'>
            <h1>Instrumental</h1>

            </div>
            </div>
        </div>


        <div className="Allgenre">
            <div className="heading">

            <h2>Browse all </h2>
            </div>
            <div className="genregrid">
                <div><h2>Focused</h2></div>
                <div><h2>Mood</h2></div>
                <div><h2>Love</h2></div>
                <div><h2>Soul</h2></div>
                <div><h2>Fantastic</h2></div>
                <div><h2>Rock</h2></div>
                <div><h2>Party</h2></div>
                <div><h2>Sleep</h2></div>
                <div><h2>Workout</h2></div>
                <div><h2>Gaming</h2></div>
                <div><h2>Cooking</h2></div>
                <div><h2>Spring</h2></div>
                <div><h2>Fresh</h2></div>
                <div><h2>Cool</h2></div>
                <div><h2>Excited</h2></div>
                <div><h2>Romance</h2></div>
                <div><h2>Dance</h2></div>
                <div><h2>Funk</h2></div>
                <div><h2>Classical</h2></div>
                <div><h2>Metal</h2></div>
                <div><h2>Electrical</h2></div>
                <div><h2>Motivation</h2></div>
                <div><h2>Carebian</h2></div>
                <div><h2>Hindi</h2></div>
                <div><h2>Folk</h2></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        {/* <Router>
            <Switch>
            <Route exact path="/Pop">
              <Container >
                <Pop/>
              </Container>
            </Route>
            </Switch>
        </Router> */}
        </div>
    )
}

export default SearchS
