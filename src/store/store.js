import { createStore } from "redux";
import ProductDisplayReducer  from "../reducers/ProductDisplayReducer";

const store = createStore(ProductDisplayReducer);

export default store;