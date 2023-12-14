import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props) =>{
    const {resData} = props;
    const {id,name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resData;
    //console.log(resData);
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg" style={{backgroundColor :"#f0f0f0"}}>
            {/* {console.log(resData.card.card.info.id)} */}
            <img className="w-[2300px] h-[200px] rounded-lg  transition duration-300 ease-in-out hover:scale-110" 
            alt="Biryani"
            src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-1 text-lg uppercase text-center transition duration-300 ease-in-out hover:scale-110">{name}</h3>
            <h3 className="text-center">🍽️</h3>
            <h4 className="text-center transition duration-300 ease-in-out hover:scale-110">{cuisines.join(', ')}</h4>
            <div className="place-items-center transition duration-300 ease-in-out hover:scale-110">
            <h4 className="rounded-full bg-red-400 items-center text-center">{costForTwo}</h4>
            </div>
            
            <div className="flex flex-wrap text-center">
                <div className="w-[30px] border-4 bg-green-700 border-solid border-grey-700 mX-2 rounded-full">
                    <h4 className="transition duration-300 ease-in-out hover:scale-110">⭐</h4>    
                </div>
                    <div className="pt-1 font-bold ">
                    <h4 className="transition duration-300 ease-in-out hover:scale-110">{avgRating}  | </h4>
                    </div>
                    <h4 className="pt-1 font-bold transition duration-300 ease-in-out hover:scale-110">🛵{resData.sla.slaString}</h4>
            </div>
        </div>
    );
};

//Higher Order component 

// it takes input as RestaurantCard and return output as RestaurantCardPromoted

export const withPromotedLabel =(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-orange-200 text-white mx-4 px-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard