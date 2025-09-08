import {ACTION_TYPE} from "./action-type.js";
import {apiClient} from "../../utils/index.js";

export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user,
})

export const loginUserAsync = ({password, number}) => (dispatch) =>
    apiClient(`/users?password=${password}&number=${number}`).then(([loadedUser]) => {
            dispatch(setUser(loadedUser))
            return loadedUser
        }
    )

export const registerUserAsync = (user) => (dispatch) =>
    apiClient('/users-table', 'POST', user).then((loadedUser) => {
            dispatch(setUser(loadedUser))
            return loadedUser
        }
    )

export const logout = {
    // apiClient('/logout', 'POST').then(() => {
    //     dispatch({
    //         type: ACTION_TYPE.LOGOUT
    //     })
    // })
    type: ACTION_TYPE.LOGOUT

}