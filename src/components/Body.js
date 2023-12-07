import React from "react";
import {useState,useEffect} from 'react'
import RestaurantCard from "./RestaurantCard";
import { CDN_SWIGGY_RESTAURANT_API } from "../utils/constants";
import resList from "./../utils/mockdata";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () =>{
    //console.log(resList[0].data.cards[3].card.card.info);
    const [listofRestaurant,setListofRestaurant] = useState([]);//([resList[0].data.cards[3].card.card.info]); 
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const onlineststus = useOnlineStatus();
    var allRes =[]; 

    useEffect(()=>{
        fetchData();
        },[]);
    
        const fetchData = async() =>{
            const data = await fetch(CDN_SWIGGY_RESTAURANT_API);
            const json = await data.json();
            //console.log(json.data.cards);
            for (let i = 3; i < json.data.cards.length; i++) {
                allRes.push(json.data.cards[i].card.card.info);    
              }
            //console.log(allRes);
            setListofRestaurant(allRes);  
            setFilteredRestaurant(allRes);  
        }
        // if(listofRestaurant.length === 0)
        // {
        //     return (<h1>Loading...</h1>);
        // }
        //  rendering shimmer effect when no data is there is called conditional rendering

        if(onlineststus === false)
        {
           // return (<h1>you are offline</h1>);

           return (<Offline/>);
        }


        if(listofRestaurant.length === 0)
        {
           return <ShimmerCard/>;
        }
       return(
        <div className="body">
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        //Filter the res cards and update the UI
                        const filteredRestaurant = listofRestaurant.filter(
                            (res) => res.name.toUpperCase().includes(searchText.toUpperCase())
                        );
                            setFilteredRestaurant(filteredRestaurant);
                        
                    }}>Search</button>
                    
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2  bg-gray-100 rounded-lg border shadow-lg" onClick={()=>{

                        const filteredListofRestaurant = listofRestaurant.filter(
                                            (res) => res.avgRating >3.9
                            );
                            setFilteredRestaurant(filteredListofRestaurant);
                            }}>
                            Top Rated Restaurant
                            </button>
                    <button className="filter-btn px-2 py-2 m-4 p-4 bg-gray-100 rounded-lg border shadow-lg" onClick={() =>{
                    setFilteredRestaurant(listofRestaurant);
                                                }}>
                            Clear Filter
                    </button>
                </div>
                    
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map( restaurant => (
                   <Link to={"/restaurant/"+restaurant.id} key={restaurant.id}>
                        <RestaurantCard  resData={restaurant} />
                   </Link> )
                )}
                {/* Don't use the below code change it to dynamic code by using map function use above  */}
                {/* <RestaurantCard resData ={resList[0]} />
                <RestaurantCard resData ={resList[1]} />
                <RestaurantCard resData ={resList[2]} />
                <RestaurantCard resData ={resList[3]} />
                <RestaurantCard resData ={resList[4]} />
                <RestaurantCard resData ={resList[5]} />
                <RestaurantCard resData ={resList[6]} />
                <RestaurantCard resData ={resList[7]} />
                <RestaurantCard resData ={resList[8]} />
                <RestaurantCard resData ={resList[9]} />
                <RestaurantCard resData ={resList[10]} />
                <RestaurantCard resData ={resList[11]} />
                <RestaurantCard resData ={resList[12]} />
                <RestaurantCard resData ={resList[13]} /> */}
                {/* <RestaurantCard resName="Punjabi grill" cousine="Biryani, North Indian, Asian" rating="4.4" deliveryTime="30 minutes" ImageSrc="https://b.zmtcdn.com/data/dish_photos/42e/bacab4b2825c5d0b40bebd300d89b42e.jpg"/>
                <RestaurantCard resName="KFC" cousine="Fast food, Burger, Pizza" rating="4.2" deliveryTime="30 minutes" ImageSrc="https://i.pinimg.com/474x/8a/5c/44/8a5c44843f653b6fb6a4c53b2f0b3a89.jpg"/>
                <RestaurantCard resName="Burger King" cousine="Fast food" rating="3.3" deliveryTime="25 minutes" ImageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOiCqJrEgCf30uRyN1AE5aF2Tj91zJSn5qp-mCBBjBcGQn6zT_ErLtng3sEMO5BeAJaM&usqp=CAU"/>
                <RestaurantCard resName="Godavri snacks" cousine="South Indian" rating="4.0" deliveryTime="40 minutes" ImageSrc ="https://c.ndtvimg.com/2022-04/jt35llb_south-indian-breakfast-_625x300_11_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384"/> */}
            </div>
        </div>
    );
};

export default Body;