import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartslice";
const ItemList =({items,showButton}) =>{
    //console.log(items);
    const dispatch = useDispatch();
    const handleAddItem =(data)=>{
        // dispatch an item
        dispatch(addItem(data));
    }
    return (
        <div>
                {items.map((item) => (
                       
                    <div key={item.card.info.id} className="w-full flex flex-row justify-between p-2 m-2 border-b-2">                        
                        <div className="text-left w-9/12" >
                         {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (<div className="h-2 w-2 bg-green-600"></div>) : (<div className="h-2 w-2 bg-red-600"></div>)}                           
                            <div className="py-2 font-bold">                                 
                                 <span>{item.card.info.name}</span>
                                 <span> - &#8377; {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultprice/100}</span>
                             </div>
                             <p className="text-xs text-left">{item.card.info.description}</p>
                        </div> 
                        <div className="w-3/12">
                            {item?.card?.info?.imageId ? (
                                <div> 
                                    <div className="absolute"> 
                                    {showButton === 'true' ? 
                                        (<button className="p-2 mx-10  mt-16 mb-12 rounded-lg bg-white shadow-lg  m-auto w-max" onClick={()=>handleAddItem(item)}>Add +</button>
                                        ) 
                                        :
                                        ('')
                                    }
                                    </div>
                                    <div className="w-[144px]">
                                        <img src={CDN_URL+item?.card?.info?.imageId} alt="food-image" className="w-[144px] h-[99px] rounded-lg "/>
                                    </div>
                                </div>
                            ) : (
                                <div className=""> 
                                {showButton === 'true' ? 
                                        (
                                        <button className="p-2 rounded-lg bg-white shadow-lg  m-auto w-max" onClick={() =>handleAddItem(item)}>Add +</button>
                                        )
                                        :
                                        ('')
                                } 
                                        </div>
                            )}
                            
                        </div> 
                    </div>



                ))}
        </div>
        );
}
export default ItemList;