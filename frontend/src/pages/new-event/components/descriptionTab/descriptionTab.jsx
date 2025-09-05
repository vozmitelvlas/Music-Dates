import {HighlightedText, Input, PinkLayer, WhiteLayer} from "../../../../components";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import {LocationSelect} from "./components";
import {sanitizeContent} from "./utils";
import {useState} from "react";
import styled from "styled-components";

const DescriptionContainer = ({className, onNext, state, contentRef}) => {
    const [descriptionState, setDescriptionState] = useState(state)

    const onFormStateChange = ({target}) => {
        setDescriptionState(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const saveAndNext = () => {
        onNext({
            description: {
                ...descriptionState,
                content: sanitizeContent(contentRef.current.innerHTML),
            }
        })
    }

    return (
        <div className={className}>
            <WhiteLayer className="title">
                <HighlightedText>Заголовок *</HighlightedText>
                <Input
                    type="text"
                    name="title"
                    value={descriptionState.title}
                    onChange={onFormStateChange}
                    variant="light"
                    placeholder="Предлагаю..."
                />
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Описание *</HighlightedText>
                <p>Расскажите подробно о деталях</p>
                <PinkLayer
                    as="div"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    height="300px"
                    ref={contentRef}
                >
                    {descriptionState.content}
                </PinkLayer>
            </WhiteLayer>

            <WhiteLayer className="skill">
                <HighlightedText>Требуемый опыт *</HighlightedText>
                <Input
                    value={descriptionState.skill}
                    type="text"
                    name="skill"
                    onChange={onFormStateChange}
                    variant="light"
                />
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Место *</HighlightedText>
                <LocationSelect placeQuery={descriptionState.location} setPlaceQuery={setDescriptionState}/>
            </WhiteLayer>

            <WhiteLayer>
                <HighlightedText>Фото</HighlightedText>
                <p>События с фото выглядят более привлекательными</p>
                <PinkLayer width="150px" height="150px" className='photo'>
                    +
                </PinkLayer>
            </WhiteLayer>

            <ContinueButton onClick={saveAndNext}/>
        </div>
    )
}

export const DescriptionTab = styled(DescriptionContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  .title, .skill {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    cursor: pointer;
  }
`