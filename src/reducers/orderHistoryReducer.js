import {ORDER_HISTORY_DATA} from "../actions/actionTypes"

const initialState = {
 ordersList: []
}

export default function orderHistoryReducer(state = initialState, action) {
    switch (action.type) {
       case ORDER_HISTORY_DATA:
            const ordersList = action.ordersList;
            
            return {
                ...state, ordersList
            }

            default:
                return {
                    ...state
                }
    }

}