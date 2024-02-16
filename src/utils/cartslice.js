import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name : 'cart',
    initialState : {
        items  : []
    },
    reducers :{ 
        addItem : (state,action) =>{
            // mutating the state here
                state.items.push(action.payload);
        },
        removeItem :(state )=>{
            state.items.pop()
        },
        clear : (state)=>{
            state.items.length =0 ;
        }
    }
});

export default cartslice.reducer;
export const {addItem,removeItem,clear} =  cartslice.actions;