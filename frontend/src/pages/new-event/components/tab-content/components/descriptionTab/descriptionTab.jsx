import {Button, HighlightedText, PinkLayer, WhiteLayer} from "../../../../../../components";
import styled from "styled-components";
import {useRef} from "react";
import {ContinueButton} from "../continue-button/continue-button.jsx";

const DescriptionContainer = ({className, onNext}) => {
    const contentRef = useRef(null)


    return(
        <div className={className}>
            <WhiteLayer>
                <HighlightedText>Заголовок *</HighlightedText>
                <PinkLayer
                    as="div"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    // onInput={handleChange}
                    ref={contentRef}
                    height="50px"
                    data-placeholder="Предлагаю..."
                />
            </WhiteLayer>
            <WhiteLayer>
                <HighlightedText>Описание *</HighlightedText>
                <p>Расскажите подробно о деталях</p>
                <PinkLayer
                    as="div"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    // onInput={handleChange}
                    height="300px"
                    ref={contentRef}
                />
            </WhiteLayer>
            <WhiteLayer>
                <HighlightedText>Фото</HighlightedText>
                <p>События с фото выглядят более привлекательными</p>
                <PinkLayer width="150px"/>
            </WhiteLayer>
            <WhiteLayer>
                <HighlightedText>Место *</HighlightedText>
                <PinkLayer
                    data-placeholder="Указать местоположение..."
                    height="45px"
                    width="450px"
                />
            </WhiteLayer>

            <ContinueButton onClick={onNext}/>
        </div>
    )
}

export const DescriptionTab = styled(DescriptionContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`