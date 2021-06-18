import * as ActionTypes from "./actionTypes";

export const loadProductData = (productList) => ({
    type:ActionTypes.LOAD_PRODUCT_DATA,
    productList,
})

export const loadProductDetails = (productId) => ({
    type:ActionTypes.LOAD_PRODUCT_DETAILS,
    productId,
})

export const setAuthUSer = (authUser) => ({
    type:ActionTypes.SET_AUTH_USER,
    authUser,
})


export const addProductToCart = (product,authUser) => ({
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    product,
    authUser
})

export const removeProductFromCart = (productId) => ({
    type:ActionTypes.REMOVE_PRODUCT_FROM_CART,
    productId
})

export const fetchCartForCurrentUser = (userUid, currentCart) => ({
    type:ActionTypes.FETCH_CART_FOR_CURRENT_USER,
    userUid,
    currentCart,
})

export const orderToConfirm = (orderObject) => ({
    type:ActionTypes.ORDER_TO_CONFIRM,
    orderObject,
})

export const emptyCart = () => ({
    type:ActionTypes.EMPTY_CART,
})

export const emptyProductList = () => ({
    type:ActionTypes.EMPTY_PRODUCT_LIST    
})

export const fetchOrderHistory = (ordersList) =>({
    type:ActionTypes.ORDER_HISTORY_DATA,
    ordersList
})

