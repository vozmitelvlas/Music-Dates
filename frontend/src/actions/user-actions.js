import {ACTION_TYPE} from "./action-type.js";
import {apiClient} from "../utils/index.js";

const setUserAction = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user,
})

export const loginUserAsync = (user) => (dispatch) =>
    apiClient('/users', 'POST', user).then((loadedUser) =>
        dispatch(setUserAction(loadedUser))
    )

export const registerUserAsync = (user) => (dispatch) =>
    apiClient('/users', 'POST', user).then((loadedUser) =>
        dispatch(setUserAction(loadedUser))
    )