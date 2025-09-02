import styled from "styled-components";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import {HighlightedText, PinkLayer, WhiteLayer} from "../../../../../../components";

const PriceTabContainer = ({className, onFinish}) => {
    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <HighlightedText>Общие расходы</HighlightedText>
                    <div className="date-and-time">
                        <PinkLayer width="200px">
                        </PinkLayer>
                    </div>
                </WhiteLayer>
                <WhiteLayer>
                    <HighlightedText>Индивидуальные расходы</HighlightedText>
                    <PinkLayer width="200px">

                    </PinkLayer>
                </WhiteLayer>
            </div>

            <ContinueButton onClick={onFinish}/>
        </div>
    )
}

export const PriceTab = styled(PriceTabContainer)`
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