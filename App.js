//const heading =  React.createElement("h1",{},"Hello this is h1 element from React!!!");

const Parent = React.createElement("div",{id:"Parentdiv"},
                    React.createElement("div",{id:"Childdiv"},
                            ["Hello this is Child div",React.createElement("h1",{id:"h1"},"This is the Heading")]
                    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
console.log(Parent);