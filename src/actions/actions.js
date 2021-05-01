import {LOAD_PRODUCT_DATA, LOAD_PRODUCT_DETAILS, SET_AUTH_USER} from "./actionTypes";

export const loadProductData = (productList) => ({
    type:LOAD_PRODUCT_DATA,
    productList,
})

export const loadProductDetails = (productId) => ({
    type:LOAD_PRODUCT_DETAILS,
    productId,
})

export const setAuthUSer = (authUser) => ({
    type:SET_AUTH_USER,
    authUser,
})

