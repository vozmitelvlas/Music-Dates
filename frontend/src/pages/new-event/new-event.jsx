import {DescriptionTab, ParticipantsTab, PriceTab, TimeTab, TabButtons, NavigateButtons} from "./components";
import {useMatch, useNavigate, useParams} from "react-router-dom";
import {loadEventDataAsync, saveEventAsync} from "../../store/actions";
import {getValidationErrorsEventData} from "../../schemes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {selectEvent, selectUserId} from "../../store/selectors";
import {H1} from "../../components";
import {tabs} from "./constants";
import styled from "styled-components";

const NewEventContainer = ({className}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contentRef = useRef(null)
    const [isFull, setIsFull] = useState(false)
    const isCreating = !!useMatch('/new-event')
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('description')
    const isEditing = !!useMatch('/platforms/event/:id/edit')
    const [event, setEvent] = useState({
        ...useSelector(selectEvent),
        organizerId: useSelector(selectUserId)
    })

    useEffect(() => {
        if (isCreating) {
            setIsLoading(false)
            return
        }

        dispatch(loadEventDataAsync(id)).then(postData => {
            // setError(postData.error)
            setEvent(postData)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        const errors = getValidationErrorsEventData(event[activeTab], activeTab)
        errors.length ? setIsFull(false) : setIsFull(true)
    }, [event, activeTab])

    const continueOrCreate = (offset) => {
        const currentIndex = tabs.indexOf(activeTab)
        if (currentIndex === tabs.length - 1) {
            dispatch(saveEventAsync(event)).then(({id}) => {
                navigate(`/platforms/event/${id}`)
            })
            return
        }

        const newIndex = currentIndex + offset
        if (newIndex >= 0 && newIndex < tabs.length) {
            setActiveTab(tabs[newIndex])
            window.scrollTo(0, 0)
        }
    }
    const toNextTab = () => continueOrCreate(1)
    const toPrevTab = () => continueOrCreate(-1)

    const TabContent = (activeTab) => {
        switch (activeTab) {
            case 'description':
                return <DescriptionTab
                    activeTab={activeTab}
                    contentRef={contentRef}
                    state={event.description}
                    setEvent={setEvent}
                />
            case 'participants':
                return <ParticipantsTab
                    state={event.participants}
                    setEvent={setEvent}
                />
            case 'time':
                return <TimeTab
                    state={event.time}
                    setEvent={setEvent}
                />
            case 'price':
                return <PriceTab
                    state={event.price}
                    setEvent={setEvent}
                />
            default:
                return null
        }
    }

    return (
        <div className={className}>
            <h1>Новое событие</h1>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab}/>
            {TabContent(activeTab)}
            <NavigateButtons
                onNext={toNextTab}
                activeTab={activeTab}
                onPrev={toPrevTab}
                isFull={isFull}
                isEditing={isEditing}
            />
        </div>
    )
}


export const NewEvent = styled(NewEventContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`