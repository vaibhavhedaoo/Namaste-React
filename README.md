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

