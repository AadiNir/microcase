import React from "react";
import insta from "../assets/icons8-instagram-100.png";
import li from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Footer(){
    return(
        <div>
            <footer className="footer">
                <p className="cr">Copyright © Team_Exception_Case</p>
                <div>
                    <img className="icon" src = {insta}></img>
                    <img className="icon" src = {li}></img>
                    <img  className="icon" src = {twitter}></img>
                </div>
            </footer>
        </div>
);
}

export default Footer;