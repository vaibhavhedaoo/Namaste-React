import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from  "./components/Body";
import About  from "./components/About";
import Contactus from "./components/Contactus";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom" 
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {

    const [userInfo,setUserInfo] = useState();
    //Authentication
    useEffect(()=>{
        // Make an API call and get the data
        const data={
            name : "Vaibhav Hedaoo",
            email : "vaibhavhedaoo12@gmail.com"
        }
        setUserInfo(data.name);
    },[]);
    return (
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    );
}

const appRouter =createBrowserRouter([
    {
        path :"/",
        element : <AppLayout/>,
        errorElement : <ErrorPage/>,
        children :[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element :<About/>
            },
            {
                path:"/contactus",
                element:<Contactus/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Grocery APP is loading here</h1>}><Grocery/></Suspense> 
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:resId",
                element : <RestaurantMenu />
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);