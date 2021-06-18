import {
    ORDER_TO_CONFIRM,
} from "../actions/actionTypes"
import {
    v4
} from "uuid";
import firebase from "firebase/app";

const initialState = {
    userUid: null,
    cartid: null,
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    trackingId: "",
    date:""
}

export default function orderReducer(state = initialState, action) {



    switch (action.type) {
        case ORDER_TO_CONFIRM:
            const orderObject = action.orderObject

            try {
                const orderUid = v4();
                orderObject.trackingId = orderUid;
                orderObject.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
                firebase.database().ref(`/orders/${orderUid}`).set({
                    ...orderObject
                });

                firebase.database()
                    .ref(`/carts/${orderObject.cartid}`)
                    .remove()
                    .then(() => {
                        console.log("Cart Removed Successfully")
                    })
                    .catch(error => {
                        console.log(error);
                    })

            } catch (error) {
                console.log("Error:: in stroing data in firebase through Order reducer", error)
            }

            return {
                ...state, ...orderObject
            };

            default:
                return {
                    ...state
                }
    }

}