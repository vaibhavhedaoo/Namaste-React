import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () =>{

    const [btnName,SetBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{
                        if(btnName == "Login")
                            SetBtnName("Logout");
                        else
                           SetBtnName("Login");
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;