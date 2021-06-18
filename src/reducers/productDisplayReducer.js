import {
    LOAD_PRODUCT_DATA,
    LOAD_PRODUCT_DETAILS,
    EMPTY_PRODUCT_LIST
} from "../actions/actionTypes";

const API_BASE_URL = "https://fakestoreapi.com/products";

const initialState = {
    productList: [],
    // productDetails:{}
};

export default function productDisplayReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCT_DATA:
            const {
                productList
            } = action;
            return {
                ...state, productList: [...state.productList, ...productList]
            };

        case LOAD_PRODUCT_DETAILS:
            const {
                productId
            } = action;
            fetch(`${API_BASE_URL}/${productId}`)
                .then(res => res.json())
                .then(result => {

                }).catch(err => {
                    console.log(err);
                })

            return {
                ...state, productDetails: {}
            };
            case EMPTY_PRODUCT_LIST:
                return {...state, productList:[]}
        
        default:
            return state;
    }

}
