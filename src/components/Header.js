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
        <div className="flex justify-between shadow-lg mb-2 ">
            <div className="logo-container">
                <Link to="/"><img className="w-56" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/about">About US</Link></li>
                    <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <li className="px-4"><button className="login" onClick={()=>{
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