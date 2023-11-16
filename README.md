# Namaste React 🚀🚀🚀
# converting a HTML into a react 
1.  init npm by using npm init, and answer the question to craete a package.json file
2.  install parcel as DEV dependencies by using npm install Parcel -D, -D is used to add DEV dependencies
3.  install react and react dom by using 
    a.  npm install react
    b.  npm install react-dom
4.  now run the server by using npx parcel index.html, application will run on a port
    --command for production build using parcel, npx parcel build index.html
    -- it will throw the error, you need to make the suggested code  


# Parcel
- Dev Build
- Local server
- HMR = Hot module replacement , means what ever changes you do it will automatically reflect on the browser, it is using file watching algo written in C ++ 
- Caching  - it gives faster builds   
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundilng - support older browser
- Diagnostics
- Error Handling
- HTTPS hosting 
- Tree Shaking : remove unused code 

# Episode 03 | Laying the foundation

- Script can be used to create command to build APP in dev mode
- also we can create script for build for Production
- check script section in package.json
- it is the industry standard
- shortcut is also availabale for running/starting  the APP : npm start instead of npm run start


## Pre-requisite of the component with JSX 

### Understanding till now
- React.CreatElement returns a object, this object when render creates a HTML element
- ReactDOM.createRoot method is used to create a Root
- root.render method is used render any element inside the root element  
- whatever we are giving to the render method it will replace inside the root element and not append 
- whatevevr happend inside the react happend inside the root only

### JSX
- **JSX is the javascript syntax,JSX stands for JavaScript XML. JSX allows us to write HTML in React.** JSX makes it easier to write and add HTML in React
- we can create React APP without JSX, but JSX makes devlopers life easy
- JSX is not react, JSX is not the part of react
- JSX is the convention where we merge HTML and JS together
-  eg.  const JSXHeading = (<h1 className="abc" tabIndex="5">  This is the JSXHeading🚀</h1>);
- JSX is HTML like syntax, but it is not HTML, it looks like XML
- JSX is equivalant to react.createlement 
- JSX is not pure javascript, browser can not understand JSX. JS engine don't know JSX.
- JSX transpiled before it goes into JS engine, Transpiled means converting to code which understood by JS engine, transpile has been done by Babel, Babel is the package use to trabspile the code, Babel is the JS compiler, Babel convert JSX to react element
- Attribute in JSX are always in camel case
- if your JSX is in multiple line, then you have to wrap it in parenthesis "( )", else it is good to have in single line 

### Component 
- Everything in the react is component, React component is not React element 
- 2 ways to create a component  1. class based component (old way),    2.  functional component  (new way)
- **A functional component is just a normal JS function which returns JSX or a React element.** 
- Whenever you are creating a component, just start the name with Capital letter
- Functional component example :   
                                    const HeadingComponent = () =>{
                                        return <h1>This is functional component </h1>;
                                    }
- React component can not be rendered like JSX, it can be rendered in another fashion like root.render(<HeadingComponent/>);, you can use paired as well as unpaired tags 
- This syntax root.render(<HeadingComponent/>); will be understood by Babel
- You can embed the component inside any other component, it is also called as **component composition** 
-   eg.  
            const Title = ()=> {
                return <h1>Welcome to Namate React by vaibhav, This is the title component</h1>
            }

            const HeadingComponent = () =>{    
                return (
                    <div id="divContainer">
                            <Title/>
                            <h1>This is Heading functional component </h1>
                    </div>
                );
            }

            root.render(<HeadingComponent/>);
            ![Alt text](image.png)
- you can also embed a JSX inside another Component, if you want to render JSX inside the another component it will be different than Component Composition which is similar to expression 
- you can execute the expression inside component, you can write any valid JS piece of code and it will execute the same way as it is in JS. expression can be wriiten between curly braces "{ }"
- you can append the component inside JSX as well
- when you execute any expression inside { }, JSX will prevernt to execute any malicious piece of code,it anzitize the code or data, it prevent from cross site scripting
- The React component can be called as function inside the expression as well like {Title()} where Title is nothing bua a component 





























