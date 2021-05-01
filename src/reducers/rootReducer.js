import {combineReducers} from "redux";
import productDisplayReducer from "./productDisplayReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
    productDisplayReducer,
    sessionReducer
});

export default rootReducer;