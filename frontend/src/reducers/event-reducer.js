import {ACTION_TYPE} from "../actions";

const initialEventState = {
    "title": "",
    "address": "",
    "time": "",
    "duration": "",
    "price": "",
    "image": "",
    "organizerId": "",
    "description": "",
}

export const eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_EVENT_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}