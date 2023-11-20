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

# Episode 04 | Talk is cheap, show me the code!!!
## In this Episode we have learned component, passing props, passing the dynamic data, using keys etc. 
- In this Episode we are going to build a food ordering app like zomato
- page layout looks like this
-
/*
* Header
* - Logo
* - NAV Items
* Body
* - Search 
* - Restaurant container
*   - Restaurant Card
*     - image
*     - name 
*     - star rating, cuisines, ETA,  
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

- In this app we have done component composition and created a food ordering app which looks like as follows
![Food app](image.png)
- For the UI devlopemnt we need to do the planning and we need to create a design or a mock up
- First of all we have make a card item which is static, now we are making it dynamic, so that we can have multiple restaurant
- to make card dynamic we are using props(properties), with props we can pass the dynaic data to the component, props are nothing but arguments to the function
- props are nothing but JS object, you can render props within { } with props.[propertyname] like props.resName
- You can pass any number of props to the component, react will wrap it and gives you a object called it as a props 
- you can also **destructure the props**, it gives the good visibility/readibility of the props, destructuring of props in not React concept, it is a JS concept
- From the backend, the data will come to us in the form of json
- **Config driven UI** , configurations are sent as a part of data 
- If we have a long list of props to be passed, it is a good practice that we can pass whole object as the Props  eg.  <RestaurantCard resData={resobj}/>, here RestaurantCard is the component resData is the props and resobj is nothing but the object containing the data, which may come from the API call
- Use optional chaining (?) and restructure the data, don't use the long object property name
- don't repeat youself use loop for binding the component

# Don't ignore the warnig or error
- in the console we are getting a warning ![Alt text](image-1.png), this error tells you that each item in the kist should be represented with a unique key
- here we are starting about Key, Key is the reserved keyword in React
- **why to use key?** , you should not use index as a key, it is not recommended, use only unique keys




### Understanding till now
- You can JSX and component to render the elemnt 
- you can use { } to execute the expression
- you can bind any component to any other component, it's called component composition
- you can use JSX element inside component or vice a versa
- you can use paired or unpaired tag to render the component 
- JSX and component are nothing but the object
- Babel is used for transpiling the code, it is the compiler  

=======================================================Episode 04 ends here======================================================================

# Episode-05 | Let's get Hooked 
- In this chapter we are going to cover react hooks 
- first of all create a seprate file for each component inside a component folder which is inside src folder
- export the component with the help of export default  and import the same component whenever it is required
- Do not keep any hard quoted data or URL, inside a component file, it is a industry standard, hard quoted data should be keep seprate like utils folder like constants.js
- There 2 types of Export and 2 types of Import, Default export, Named export and Default import, Named Import
- A file can not have more than 1 default export
- for named export just write the word "export" infront of element
- we can attach onclick evevnt to the button by adding a callback , eg `onClick={()=>{console.log("Button clicked")}}`
- **Notes** React solves the problem of consistency and dom manipulation, whenever the data changes the UI should change, UI layer and data layer should work in sync, updating the dom efficientely very fast with the help of virtual dom
- whenevre you want a functionality like when data is change your UI should change use **state variable**, to make any variable a state variable, we can use state hook, A react hook is nothing but a normal JS function with some super power, it is nothing but a utility function given by react

# React Hooks\
- Hooks are Normal JS utility function, these function is available inside React, for using Hooks, we need to import it 
- there are 2 very important hooks 1.useState()  2.useEffect(),  most of the time you use these 2 most importrnt hooks, there are other hook as well
## useState() Hook
- useState() => used for Super powerful state variable in React, you need to import it as a named import, it maintain the state for the component, [read more here](https://www.w3schools.com/react/react_usestate.asp) , as soon as the data changes which is using useState, the render of the UI happend automatically.
- useState() is returning array of 2 element in the form of array destructuiring, first is the pointer to actual data and second is a function which is nothing but a trigger, whenever the function gets called React Fiber algorithen start execution and do a new Render.
- we can use useStae like 
`const arr = useState(resList);`
`const [listOfRestaurants, setListOfRestraunt] = arr;` arr contains 2 element inside it as it is a array, which is equivalant to a one liner `const [listofRestaurant,setListofRestaurant] = useState(resList);`
- Whenever the local state variable changes/updates React re-render's the Component, React triggers a reconciliation cycle

## useEffect() Hook
- We will be going to discuss in next chapter
# Internals of the Render
- React uses reconsiliation algorithem introduced in React 16, it is also known as React fibre, on UI we have a DOM, React creates a virtual DOM, when UI changes after any filteration, then the resultant UI changes with the help of virtual DOM and diff algorithem
- Actual DOM is the list of tag, **Virtual DOM is the representation of actual DOM in the form of object**.
- Diff algorithem, finds out the difference between 2 virtual dom previuos virtual DOM and latest virtual DOM

# Episode-06 | Exploring the World
## Monolith vs Micro Service
- In this chapter we are going to dicuss monolith vs micro service arch., fetch data dynamically and populate 
- Monolith : it is a huge big project contains API, UI code, auth, DB code, notifications etc. simple changes require a lot of effort also whole application needs to be deployed
- Micro service : we have different services for different job, all the application are seprate, but they can talk to each other, all these service combine together and make a Big App, this is also know as sepration of concern, it uses a concept called single responsibility principle, these servoces talk to each other

## Fetching data dynamically
- there are 2 approach to fetch the data dynamically 1. As soon as page Load, call a API, wait for the data and Render the UI 2. as soon as page load we will Render the UI which shows the skeleton and then do a API call and the re render or fill the data  on the page.
- we are going to use 2nd approach, as it is a better approach it gives you a better UX, user do not see a lag, user thinks something is loading and no screem freeze, dosn't matter if we are rendering page multiple times
-  after getting the data use **optional chaining** for checking null values, [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- fetching data requires some time, to improve the user experience we can show a spinning loader 
    `if(listofRestaurant.length === 0)
        {
            return (<h1>Loading...</h1>);
        }`
        , showing a loader is ok but not latest industry standard, we can use shimmer UI [read more here](https://johannes-z.github.io/office-ui-fabric-vue/components/progress/shimmer.html)
- you can also use skeleton UI, both shimmer and skeleton gives you a feeling of screen is almost loaded        

## useEffect() in action
- like useState() we are having useEffect() hook, it is a JS function which react gives to us, it has specific use case/purpose [read more here](https://react.dev/reference/react/useEffect)
- we need to import useEffect() from react, it is a named import similar to useState() 
- syntax : useEffect take 2 argument, first is the arrow function, it is a callback function, and second argument is the dependency array which is optional  `useEffect(()=>{
        console.log("useeffect hook");
    },[])`
- useEffect() callback function will gets called, immediately after your component renders 
- you can use useEffect() hook when you need to do something after the component gets rendered.
-  we can fetch the data from remote API with the help of fetch() method and it is given to us by browser

## Implementing shimmer
- create a seprate component, which is just like cards, and return the shimmer UI when you don;t have data with you
        `if(listofRestaurant.length === 0)
        {
           return <ShimmerCard/>;
        }` 
- it makes fake expression
- rendering shimmer effect when no data is there is called **conditional rendering**
- instead of if...else you can use ternary operator

## implementing Search box
- we have created a UI for the search box, on click of Search button we are searching the data and update the UI
- so, to get the value of serch criteria that the user enters in the text box, we need to bind the **value property** of the text box to the state variable     
- **By default the text box won't allow you to type anything if you have used the useState() which is tied text box** `const [searchText,setSearchText] = useState("");` ,  you have to use onChange() event to set the state of the same textbox like  ` onChange={(e)=>{  setSearchText(e.target.value); }`, by doing this you trigger a re-render process on the component