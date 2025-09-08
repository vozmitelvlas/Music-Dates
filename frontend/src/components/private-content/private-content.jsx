import {setErrorMessage} from "../../store/actions/error-actions.js";
import {checkAccess} from "../../utils/check-access.js";
import {selectUserRole} from "../../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import {ERROR} from "../../constants/error.js";


export const PrivateContent = ({children, access, serverError = null}) => {
    const dispatch = useDispatch()
    const userRole = useSelector(selectUserRole)

    const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED
    const error = serverError || accessError

    const setError = () => dispatch(setErrorMessage(error))

    return error ? {setError} : children
}