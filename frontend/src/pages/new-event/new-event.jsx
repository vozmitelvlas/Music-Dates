import styled from "styled-components";
import {Button, H1} from "../../components";
import {TabButtons, TabContent} from "./components";
import {useState} from "react";

const NewEventContainer = ({className}) => {
    const [activeTab, setActiveTab] = useState('description')

    return (
        <div className={className}>
            <H1>Новое предложение</H1>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabContent activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    )
}


export const NewEvent = styled(NewEventContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`