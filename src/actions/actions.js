import {LOAD_PRODUCT_DATA, LOAD_PRODUCT_DETAILS} from "./actionTypes";

export const loadProductData = (productList) => ({
    type:LOAD_PRODUCT_DATA,
    productList:productList
})

export const loadProductDetails = (productId) => ({
    type:LOAD_PRODUCT_DETAILS,
    productId
})