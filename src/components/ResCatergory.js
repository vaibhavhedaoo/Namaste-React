import React, { useState } from "react";
import ItemList from "./ItemList";
const ResCategory =({data,showItem,setShowItem}) =>{
    
    const handleClick =() =>{
        setShowItem();        
    }
 return (
    <div >
    <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="text-left font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-right">⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards}/>}
    
    </div>
    
    </div>
 )
};


export default ResCategory;