import {useRef, useState} from "react";
import styled from "styled-components";
import {DescriptionTab, ParticipantsTab, PriceTab, TimeTab} from "./components";
import {tabs} from "../../constants";
const TabContentContainer = ({className, activeTab, setActiveTab}) => {


    const goToNextTab = () => {
        // if (activeTab === 'description' && !descriptionText.trim()) {
        //     alert('Введите описание')
        //     return
        // }

        const currentIndex = tabs.indexOf(activeTab)
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1])
            window.scrollTo(0, 0);
        }
    }

    const handleFinish = () => {
        console.log("create event")
    }

    switch (activeTab) {
        case 'description':
            return <DescriptionTab onNext={goToNextTab} />;
        case 'participants':
            return <ParticipantsTab onNext={goToNextTab} />;
        case 'time':
            return <TimeTab onNext={goToNextTab} />;
        case 'price':
            return <PriceTab onFinish={handleFinish} />;
        default:
            return null;
    }
}

export const TabContent = styled(TabContentContainer)`

`