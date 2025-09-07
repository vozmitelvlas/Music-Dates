import {apiClient} from "../utils";
import {ACTION_TYPE} from "./action-type.js";


export const RESET_EVENT_DATA = {
    type: ACTION_TYPE.RESET_EVENT_DATA
}
export const SET_EVENT_DATA = (eventData) => ({
    type: ACTION_TYPE.SET_EVENT_DATA,
    payload: eventData
})

export const loadPlatformEventAsync = (id) => (dispatch) =>
    apiClient(`/platforms/${id}`).then(eventData => {
        dispatch(SET_EVENT_DATA(eventData))
    })
export const saveEventAsync = ({id, ...newEventData}) => (dispatch) => {
    const saveRequest = id ?
        apiClient(`/platforms/${id}`, 'PATCH', newEventData) :
        apiClient('/platforms', 'POST', newEventData)

    return saveRequest.then(eventData => {
        dispatch(SET_EVENT_DATA(eventData))
        return eventData
    })
}

export const removeEventAsync = (id) => () =>
    apiClient(`/platforms/${id}`, 'DELETE')

export const loadEventDataAsync = (id) => (dispatch) =>
    apiClient(`/platforms/${id}`).then(eventDAta => {
        if (eventDAta)
            dispatch(SET_EVENT_DATA(eventDAta))

        return eventDAta
    })