import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, FETCH_CART_FOR_CURRENT_USER} from "../actions/actionTypes";
import { v4 } from "uuid";
import firebase from "firebase/app";
const initialState = {
    userUid:null,
    cartid:null,
    cart:[],
    totalQuantity:0,
    totalPrice:0
}

export default function cartReducer (state = initialState, action) {
    let {cart} = state;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    switch(action.type) {
        case ADD_PRODUCT_TO_CART :
            const {product} = action;
            const {authUser} = action;
            let productFound = false;
            let totalQuantity = 0;
            let totalPrice = 0;
            let cartid = state.cartid ? state.cartid : null;
            const userUid = authUser ? authUser.uid : null;
            for( let cartEntry of cart) {
                if(cartEntry.productId === product.id.toString()) {
                    cartEntry.quantity += 1;
                    cartEntry.price = cartEntry.quantity * product.price;
                    productFound = true;
                    break;
                }
            }
            if(!productFound) {

                if(cartid === null) {
                    cartid = v4();
                }
                const cartEntry = {
                    productId : product.id.toString(),
                    product,
                    quantity:1,
                    price:product.price
                }
                cart.push(cartEntry);
            }

            

            for(let cartEntry of cart) {
                totalQuantity += cartEntry.quantity;
                totalPrice += cartEntry.price;
            }
            const cartObject = {
                userUid,
                cartid: userUid ? userUid: cartid, 
                cart:[...cart], 
                totalQuantity, 
                totalPrice
            }
            try{
                firebase.database().ref(`/carts/${cartObject.cartid}`).set({
                    ...cartObject
                });
            } catch(error) {
                console.log("Error:: in stroing data in firebase through reducer", error)
            }

            return {...state,userUid, cartid, cart:[...cart], totalQuantity, totalPrice};


            case REMOVE_PRODUCT_FROM_CART:
                const {productId} = action;
                const updateCartArray = [];
                let updateQuantity = 0;
                let updatePrice = 0;
                
                for(let cartEntry of cart){
                    if(cartEntry.productId !== productId.toString()){
                        updateCartArray.push(cartEntry);
                        updateQuantity += cartEntry.quantity;
                        updatePrice += cartEntry.price;
                    }
                }

                const cartUpdateObject = {
                    userUid:state.userUid,
                    cartid: state.userUid ? state.userUid: cart.cartid, 
                    cart:[...updateCartArray], 
                    totalQuantity:updateQuantity, 
                    totalPrice:updatePrice
                }
                
                try{
                    firebase.database().ref(`/carts/${cartUpdateObject.cartid}`).set({
                        ...cartUpdateObject
                    });
                } catch(error) {
                    console.log("Error:: in removing data from Cart", error)
                }

                
                return {...state, cart:[...updateCartArray], totalQuantity:updateQuantity, totalPrice:updatePrice};

                case FETCH_CART_FOR_CURRENT_USER:
                    const {currentCart} = action;
                return {...state, ...currentCart};

            default: 
            return state;
    } 
}