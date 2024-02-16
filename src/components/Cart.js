import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clear } from "../utils/cartslice";
import { Link } from "react-router-dom";

const Cart =() =>{
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clear());
    }
    return(
        <div className="text-center m-4 p-4 ">
           <h1 className="font-bold text-2xl">Cart</h1>
           {cartItem.length > 0 ?
           (<div>
                <button className="p-2 m-2 text-lg font-bold bg-orange-400 text-white rounded-2xl w-52" onClick={handleClearCart}>Clear Cart</button>
           </div>
           )
           :
           ('')
            }
           {cartItem.length > 0 ?
           (<div className="w-6/12 mr-auto text-center">
            <ItemList items={cartItem} showButton={'false'}/>
           </div>
           )
           :
           (
            <div className="items-center text-center justify-center ">
                <div className="text-xl font-extrabold">Looks like your plate is empty, Add food to the cart</div>
                <div>
                        <Link className="text-xl p-2 m-2 text-orange-400" to="/">
                           <button className="rounded-lg ring-green-400"> 
                                Go to HomePage to order food
                           </button>
                        </Link>
                </div>
                <img  src="https://media.istockphoto.com/id/1051652656/vector/empty-plate-with-knife-and-fork-isolated-on-a-white-background-view-from-above.jpg?s=612x612&w=0&k=20&c=du4eKrccRjT6woHy7clC1tm9xylaBnNQvniItihv_NM="/>
            </div>
           )
            }
        </div>
    );
}

export default Cart;