import styled from "styled-components";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import {HighlightedText, PinkLayer, WhiteLayer} from "../../../../../../components";

const TimeTabContainer = ({className, onNext}) => {
    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <HighlightedText>Начало события *</HighlightedText>
                    <div className="date-and-time">
                        <PinkLayer width="400px">
                            Вариант 1
                        </PinkLayer>
                        <PinkLayer width="400px">
                            Вариант 2
                        </PinkLayer>
                    </div>
                </WhiteLayer>
                <WhiteLayer>
                    <HighlightedText>Длительность события *</HighlightedText>
                    <PinkLayer width="200px">

                    </PinkLayer>
                </WhiteLayer>
            </div>

            <ContinueButton onClick={onNext}/>
        </div>
    )
}

export const TimeTab = styled(TimeTabContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  
  .layers{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .date-and-time {
    display: flex;
  }
`