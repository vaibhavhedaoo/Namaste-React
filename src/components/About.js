import React from "react";
import User from "./User";
import UserClass from './UserClass';
const About = () =>{
    return(
        <div>
            This is the About us page!!!
            {/* <User name={"Vaibhav function component"}/> */}
            <UserClass name={"Vaibhav Class component"}/>
        </div>
    );
}



export default About;