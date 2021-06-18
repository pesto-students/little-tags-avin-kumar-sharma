import {combineReducers} from "redux";
import productDisplayReducer from "./productDisplayReducer";
import sessionReducer from "./sessionReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import orderHistoryReducer from "./orderHistoryReducer";

const rootReducer = combineReducers({
    productDisplayReducer,
    sessionReducer,
    cartReducer,
    orderReducer,
    orderHistoryReducer
});

export default rootReducer;