import {ACTION_TYPE} from "../actions";

const initialEventState = {
    organizerId: "",
    description: {
        title: "",
        content: "",
        skill: "",
        location: "",
        image: "",
    },
    participants: {
        amountFrom: "",
        amountTo: "",
        sex: "any",
        ageFrom: "",
        ageTo: "",
        isAgeUnlimited: true,
    },
    time: {
        startTime: [],
        duration: {
            days: 0,
            hours: 1,
            minutes: 30,
        }
    },
    price: {
        totalExpenses: "",
        individualExpenses: "",
    },
}

export const eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_EVENT_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ACTION_TYPE.RESET_EVENT_DATA:
            return initialEventState

        default:
            return state
    }
}