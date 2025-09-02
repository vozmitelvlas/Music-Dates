import {apiClient} from "../utils/index.js";
import {ACTION_TYPE} from "./action-type.js";


const setEventData = (eventData) => ({
    type: ACTION_TYPE.SET_EVENT_DATA,
    payload: eventData
})

export const loadPlatformEventAsync = (id) => (dispatch) =>
    apiClient(`/platforms/${id}`).then(eventData => {
        dispatch(setEventData(eventData))
    })