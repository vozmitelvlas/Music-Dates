import {apiClient} from "../../utils/index.js";
import {ACTION_TYPE} from "./action-type.js";


export const RESET_EVENT_DATA = {
    type: ACTION_TYPE.RESET_EVENT_DATA
}
export const SET_EVENT_DATA = (eventData) => ({
    type: ACTION_TYPE.SET_EVENT_DATA,
    payload: eventData
})
export const loadEventDataAsync = (id) => (dispatch) =>
    apiClient(`/events/${id}`).then(eventData => {
        if (eventData.data)
            dispatch(SET_EVENT_DATA(eventData.data))
        return eventData
    })
export const saveEventDataAsync = ({id, ...newEventData}) => (dispatch) => {
    const saveRequest = id ?
        apiClient(`/events/${id}`, 'PATCH', newEventData) :
        apiClient('/events', 'POST', newEventData)

    return saveRequest.then(eventData => {
        dispatch(SET_EVENT_DATA(eventData.data))
        return eventData.data
    })
}