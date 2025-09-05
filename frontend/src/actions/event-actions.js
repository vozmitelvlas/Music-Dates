import {apiClient} from "../utils";
import {ACTION_TYPE} from "./action-type.js";

export const SET_EVENT_DATA = (eventData) => ({
    type: ACTION_TYPE.SET_EVENT_DATA,
    payload: eventData
})

export const loadPlatformEventAsync = (id) => (dispatch) =>
    apiClient(`/platforms/${id}`).then(eventData => {
        dispatch(SET_EVENT_DATA(eventData))
    })

export const RESET_EVENT_DATA = {
    type: ACTION_TYPE.RESET_EVENT_DATA
}