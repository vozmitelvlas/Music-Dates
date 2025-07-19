import {Img} from "../../../img/img.jsx"
import styled from "styled-components";

const RightPanelContainer = ({className}) => {
    return (
        <div className={className}>
            <div>
                <div className="circle"></div>
                <div className="name">Имя</div>
            </div>
            <div>
                <Img src="/location.svg"/>
                <div className="location">Местоположение</div>
            </div>
        </div>
    )
}

export const RightPanel = styled(RightPanelContainer)`
  display: flex;
  align-items: center;
  gap: 20px;
  
  div{
    display: flex;
    align-items: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin-right: 5px;
  }
  
  .name{
    text-decoration: underline;
  }
  .location{
    text-decoration: underline;
  }
`