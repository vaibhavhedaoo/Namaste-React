import React from "react";
import { useState } from "react"; 
const User=( props) =>{
const[count,setCount] = useState(0);
    const {name} =props;
    
    return(
        <div className="user-card">
            <h1>Count : {count}</h1> 
            <h2> Name : {name}</h2>
            <h2> Location : Pune</h2>
            <h2> Contact : 9730250945</h2>
        </div>
    );
}

export default User;