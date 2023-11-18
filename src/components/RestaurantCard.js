import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props) =>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resData?.card.card.info;
    //console.log(props);
    return(
        <div className="restaurant-card">
            {/* {console.log(resData.card.card.info.id)} */}
            <img className="food-image" 
            alt="Biryani"
            src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.card.card.info.sla.slaString}</h4>

        </div>
    );
};



export default RestaurantCard