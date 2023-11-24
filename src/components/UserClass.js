import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state ={
            //count : 0
            UserInfo : {
                name : "dummy name",
                location : "Default",
                avatar_url :"",
            }
        }
    }

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/vaibhavhedaoo");
    const JSONDATA = await data.json();

    this.setState({
        UserInfo: JSONDATA,
    })
}

componentDidUpdate()
{
    //console.log("Component did update called");
}

componentWillUnmount()
{
    console.log("Unmount");
}
    render(){
        const {name, location,avatar_url} = this.state.UserInfo
        //console.log(this.state.UserInfo);
            return (<div className="user-card">
                        <img src={avatar_url}/> 
                         <h2> Name : {name}</h2>
                        <h2> Location : {location}</h2>
                        <h2> Contact : 9730250945</h2>
                        {/* <button onClick={()=>{
                           this.setState({count:this.state.count+1}); 
                        }}>Update Count</button> */}
                    </div>
            );
    }
}

export default UserClass