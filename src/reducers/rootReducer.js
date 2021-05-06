import {combineReducers} from "redux";
import productDisplayReducer from "./productDisplayReducer";
import sessionReducer from "./sessionReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    productDisplayReducer,
    sessionReducer,
    cartReducer,
    orderReducer,
});

export default rootReducer;