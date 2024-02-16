const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartslice"
const store= configureStore({
    reducer : {
        cart : cartReducer
    }
});

export default store;