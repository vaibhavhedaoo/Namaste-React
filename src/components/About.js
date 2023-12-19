import React from "react";
import User from "./User";
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";
const About = () =>{
    return(
        <div>
            This is the About us page!!!
            {/* <User name={"Vaibhav function component"}/> */}
            <UserClass name={"Vaibhav Class component"}/>
            <div>
                <div>Logged In User</div>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="font-bold text-lg">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        </div>
    );
}

export default About;