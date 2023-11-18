import React from "react";
import {useState} from 'react'
import RestaurantCard from "./RestaurantCard";
import resList from './../utils/mockdata'


const Body = () =>{
    const [listofRestaurant,setListofRestaurant] = useState(resList); 
       return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{

                    const filteredListofRestaurant = listofRestaurant.filter(
                        (res) => res.card.card.info.avgRating >4
                    );
                    setListofRestaurant(filteredListofRestaurant);
                    }}>Top Rated Restaurant</button>
                    <button className="filter-btn" onClick={() =>{
                        setListofRestaurant(resList);
                    }}>Show All</button>
            </div>
            <div className="restaurant-container">
                {
                    listofRestaurant.map( restaurant => (
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)
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