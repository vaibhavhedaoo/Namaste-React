import React from "react";
import ReactDOM from "react-dom/client";
//////////////////  ***started from scratch***   //////////////////
//const heading =  React.createElement("h1",{},"Hello this is h1 element from React!!!");

// const Parent = React.createElement("div",{id:"Parentdiv"},
//                     React.createElement("div",{id:"Childdiv"},
//                             ["Hello this is Child div",React.createElement("h1",{id:"h1"},"This is the Heading")]
//                     )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Parent);
// console.log(Parent);
//////////////////  ***started from scratch***   //////////////////



const JSXHeading = (<h1 className="abc" tabIndex="5">  This is the JSXHeading🚀</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(JSXHeading);
//console.log(JSXHeading);

const span = <span>This is the SPAN, [Embedding react element inside another react element]</span>

const Title = ()=> {
    return (
        <div>
        {span}
        <h1>Welcome to Namate React by vaibhav, This is the title component</h1>
        </div>);
}

const cl = alert("you are hacked");
const HeadingComponent = () =>{    
    return (
        <div id="divContainer">
                   <Title/>
                   {cl}
                   <h1>This is Heading functional component </h1>
        </div>
    );
}

root.render(<HeadingComponent/>);