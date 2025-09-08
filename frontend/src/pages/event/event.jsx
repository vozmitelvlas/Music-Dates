import {useDispatch, useSelector} from "react-redux";
import {loadPlatformEventAsync, RESET_EVENT_DATA} from "../../store/actions";
import {selectEvent} from "../../store/selectors";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components"
import {Description, EventHeader} from "./components";

const EventContainer = ({className}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(RESET_EVENT_DATA)
        dispatch(loadPlatformEventAsync(id)).then(eventData => {
            // setError(eventData.error)
            setIsLoading(false)
        })
    }, [])


    return (
        <div className={className}>
            <EventHeader />
            <Description />
        </div>
    )
}

export const Event = styled(EventContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`