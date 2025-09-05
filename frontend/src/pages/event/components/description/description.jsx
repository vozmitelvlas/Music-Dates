import {AvatarCard, HighlightedText, PinkLayer, WhiteLayer} from "../../../../components";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectEventDescription} from "../../../../selectors/index.js";

const DescriptionContainer = ({className}) => {
    const {content} = useSelector(selectEventDescription)

    return (
        <div className={className}>
            <div className="description">
                <WhiteLayer>
                    <HighlightedText>Описание</HighlightedText>
                    <PinkLayer>{content}</PinkLayer>
                </WhiteLayer>
            </div>

            <div className="people">
                <WhiteLayer>
                    <HighlightedText>Организатор</HighlightedText>
                    <PinkLayer>
                        <AvatarCard name="Константин"/>
                    </PinkLayer>
                </WhiteLayer>
                <WhiteLayer>
                    <HighlightedText>Участники</HighlightedText>
                    <PinkLayer className="members">
                        <AvatarCard name="Константин"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                        <AvatarCard name="Влас"/>
                    </PinkLayer>
                </WhiteLayer>
            </div>
        </div>
    )
}

export const Description = styled(DescriptionContainer)`
  display: flex;
  gap: 20px;
  
  .description{
    flex: 1;
    min-width: 0;
  }

  .people {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;

    position: sticky;
    top: 70px;
    align-self: flex-start;
  }

  .members {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`