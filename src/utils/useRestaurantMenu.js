import { useEffect, useState } from "react";
import { CDN_Restaurant_Menu } from "./constants";


const useRestaurantMenu =(resId) =>{
    const [resInfo,setResInfo] = useState(null);
    
    // fetch the data
    useEffect(()=>{
        fetchData(resId)
    },[]);

     const fetchData = async() =>{
          const data = await fetch(CDN_Restaurant_Menu+resId);
          const jsonData = await data.json();
          setResInfo(jsonData);
        }; 

    return resInfo;
}

export default useRestaurantMenu;