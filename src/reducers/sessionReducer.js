import {SET_AUTH_USER} from "../actions/actionTypes";

const initialState = {
    authUser : null
}

export default function sessionReducer(state = initialState, action) {
    switch(action.type) {
        case SET_AUTH_USER:
            return {...state, authUser: action.authUser};

        default: return state;
    }
}