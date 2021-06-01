import {LOAD_PRODUCT_DATA, LOAD_PRODUCT_DETAILS, 
    SET_AUTH_USER, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, FETCH_CART_FOR_CURRENT_USER, ORDER_TO_CONFIRM, EMPTY_CART} from "./actionTypes";

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


export const addProductToCart = (product,authUser) => ({
    type: ADD_PRODUCT_TO_CART,
    product,
    authUser
})

export const removeProductFromCart = (productId) => ({
    type:REMOVE_PRODUCT_FROM_CART,
    productId
})

export const fetchCartForCurrentUser = (userUid, currentCart) => ({
    type:FETCH_CART_FOR_CURRENT_USER,
    userUid,
    currentCart,
})

export const orderToConfirm = (orderObject) => ({
    type:ORDER_TO_CONFIRM,
    orderObject,
})

export const emptyCart = () => ({
    type:EMPTY_CART,
})

