import {DescriptionTab, ParticipantsTab, PriceTab, TimeTab, TabButtons} from "./components";
import {RESET_EVENT_DATA, SET_EVENT_DATA} from "../../actions";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectEvent} from "../../selectors";
import {H1} from "../../components";
import {tabs} from "./constants";
import styled from "styled-components";

const must_fields = {
    description: ['title', "content", "skill", "place"],
    participants: ['amountFrom', 'amountTo', "content", "skill", "place"]
}

const NewEventContainer = ({className}) => {
    const dispatch = useDispatch()
    const contentRef = useRef(null)
    const event = useSelector(selectEvent)
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('description')

    useLayoutEffect(() => {
        dispatch(RESET_EVENT_DATA)
        setIsLoading(false)
    }, [])

    const goToNextTab = (formData) => {
        dispatch(SET_EVENT_DATA(formData))

        const currentIndex = tabs.indexOf(activeTab)
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1])
            window.scrollTo(0, 0);
        }
    }

    const handleFinish = (formData) => {
        dispatch(SET_EVENT_DATA(formData))
        setActiveTab(tabs[0])
        console.log(event)
    }

    const TabContent = (activeTab) => {
        switch (activeTab) {
            case 'description':
                return <DescriptionTab
                    onNext={goToNextTab}
                    contentRef={contentRef}
                    state={event.description}
                />
            case 'participants':
                return <ParticipantsTab
                    onNext={goToNextTab}
                    state={event.participants}
                />
            case 'time':
                return <TimeTab
                    onNext={goToNextTab}
                    state={event.time}
                />
            case 'price':
                return <PriceTab
                    onFinish={handleFinish}
                    state={event.price}
                />
            default:
                return null
        }
    }


    return (
        <div className={className}>
            <H1>Новое событие</H1>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab}/>
            {!isLoading && TabContent(activeTab)}
        </div>
    )
}


export const NewEvent = styled(NewEventContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`