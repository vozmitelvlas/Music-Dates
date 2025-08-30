import {ACTION_TYPE} from "../actions";
import {ROLE} from "../constants";

const initialUserState = {
    name: null,
    city: null,
    roleId: ROLE.GUEST
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}