import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from '../pages/Home'
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import List from "../pages/List";
import History from "../pages/History";
import StationInfo from "../pages/StationInfo"
import UserVerifyHistory from "../pages/UserVerifyHistory"
import UseHistory from "../pages/UseHistory";
import Statistic from "../pages/Statistic";
import Review from "../pages/Review";


const Navbar = (props) => {
    console.log()
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home Userid = {props.userid}/>} />
                    <Route path="/home/UserVerifyHistory" element={<UserVerifyHistory Userid = {props.userid}/>} />
                    <Route path="/list" element={<List Userid = {props.userid}/>} />
                    <Route path="/list/StationInfo/:userid/:stationID" element={<StationInfo Userid = {props.userid}/>} />
                    <Route path="/history" element={<Statistic Userid = {props.userid}/>} />
                    <Route path="/history/UseHistory" element={<UseHistory Userid = {props.userid}/>} />
                    <Route path="/history/UserReview" element={<Review Userid = {props.userid}/>} />
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar