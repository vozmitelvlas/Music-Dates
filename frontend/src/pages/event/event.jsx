import {useDispatch, useSelector} from "react-redux";
import {loadPlatformEventAsync} from "../../actions";
import {selectEvent} from "../../selectors";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components"
import {Description, EventHeader} from "./components";

const EventContainer = ({className}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const event = useSelector(selectEvent)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    //очищать перед монтированием

    useEffect(() => {
        dispatch(loadPlatformEventAsync(id)).then(eventData => {
            // setError(eventData.error)
            setIsLoading(false)
        })
    }, [])


    return (
        <div className={className}>
            <EventHeader event={event}/>
            <Description event={event}/>
        </div>
    )
}

export const Event = styled(EventContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`