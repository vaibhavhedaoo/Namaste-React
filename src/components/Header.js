import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [btnName,SetBtnName] = useState("Login");
    console.log("Header")
    useEffect(()=>{
        console.log("Useeffect called from Header");
    },[btnName]);
    
    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL}/></Link>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
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