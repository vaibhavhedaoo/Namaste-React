import React from "react";
import { useState,useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu =()=>{

    //const[resData, SetResData] = useState(null);
    //const[offers, SetOffer] = useState(null);
    //const[menu,SetMenu] = useState(null);      
    const {resId} = useParams();

    const resData = useRestaurantMenu(resId);

    // useEffect(()=>{
    //     fetchData()
    // },[]);

    //  const fetchData = async() =>{
    //        // console.log(CDN_Restaurant_Menu+resId);
    //       const data = await fetch(CDN_Restaurant_Menu+resId);
    //       const jsonData = await data.json();
    //       SetResData(jsonData);
    //       SetOffer(jsonData.data.cards[1]);
    //       SetMenu(jsonData.data.cards[2]);
    //         // console.log(resData);
    //         // console.log(offers);
    //         // console.log(menu);  
    //     }; 


    if (resData === null)
        return <ShimmerCard/>;
       
        const {name,avgRating,costForTwoMessage,cuisines} = resData?.data?.cards[0]?.card?.card?.info;
        //const {header,couponCode,description} = offers.card.card.gridElements.infoWithStyle.offers[0].info
    
        return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h3>Ratings (*){avgRating}</h3>
            <br></br>
            {/* <div >
                <h2>{header}</h2>
                <h3>{couponCode} | {description}</h3>
            </div> */}
            <br></br>
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>
            </ul>
        </div>
    );
}


export default RestaurantMenu;