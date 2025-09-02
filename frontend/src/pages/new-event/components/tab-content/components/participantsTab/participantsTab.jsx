import styled from "styled-components";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import {HighlightedText, PinkLayer, WhiteLayer} from "../../../../../../components";

const ParticipantsTabContainer = ({className, onNext}) => {
    return (
        <div className={className}>
            <WhiteLayer>
                <HighlightedText>Количество участников *</HighlightedText>
                <PinkLayer width="400px">

                </PinkLayer>
            </WhiteLayer>
            <WhiteLayer>
                <HighlightedText>Пол *</HighlightedText>
                <PinkLayer width="200px">

                </PinkLayer>
            </WhiteLayer>
            <WhiteLayer>
                <HighlightedText>Возраст *</HighlightedText>
                <p>Рекомендуем указывать возратсное ограничение.
                    Ответственность за участников моложе 18 лет несет организатор события.
                </p>

                <PinkLayer
                    width="400px"
                >

                </PinkLayer>
            </WhiteLayer>

            <ContinueButton onClick={onNext}/>
        </div>
    )
}

export const ParticipantsTab = styled(ParticipantsTabContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

`