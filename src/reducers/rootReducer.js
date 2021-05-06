import {combineReducers} from "redux";
import productDisplayReducer from "./productDisplayReducer";
import sessionReducer from "./sessionReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    productDisplayReducer,
    sessionReducer,
    cartReducer
});

export default rootReducer;