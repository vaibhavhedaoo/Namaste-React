import { useEffect, useState } from "react";
import { CDN_Restaurant_Menu } from "./constants";


const useRestaurantMenu =(resId) =>{
    const [resInfo,setResInfo] = useState(null);
    
    // fetch the data
    useEffect(()=>{
        fetchData(resId)
    },[]);

     const fetchData = async() =>{
            
        const data = await fetch('https://thingproxy.freeboard.io/fetch/'+CDN_Restaurant_Menu+resId) //fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(CDN_Restaurant_Menu+resId)}`)
        .then(response => {
            if (response.ok) 
            { 
                //console.log("got response"+ response.json);
                //console.log(response.json);
                return response.json()
            
            }
            throw new Error('Network response was not ok.')
        });

        //console.log(data.data);
        const jsonData = data.data;//JSON.parse(await data.contents);

        //   const data = await fetch(CDN_Restaurant_Menu+resId);
        //   const jsonData = await data.json();
          setResInfo(jsonData);
        }; 

    return resInfo;
}

export default useRestaurantMenu;