import React from "react";
import { useState,useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCatergory";

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
       
        //{console.log("resdata",resData)}
        const {name,avgRating,costForTwoMessage,cuisines} = resData?.data?.cards[0]?.card?.card?.info;  
        const categories = (resData?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        
        return(
        <div className="text-center ">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</h3>
            
            {                
               categories.map((category) =>{
                //{console.log(category)}
                return <ResCategory key={category?.card?.card?.title} data={category?.card?.card}/>
               }) 
                
            }
           
        </div>
    )
}


export default RestaurantMenu;