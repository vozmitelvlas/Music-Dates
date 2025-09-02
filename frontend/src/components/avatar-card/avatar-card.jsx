import styled from "styled-components";

// отсылаю сюда <Img width="" height=""> или в круглый div засунуть фото

const AvatarCardContainer = ({className, name, img}) => {
    return (
        <div className={className}>
            <div className="circle"></div>
            <div>{name}</div>
        </div>
    )
}

export const AvatarCard = styled(AvatarCardContainer)`
  display: flex;
  align-items: center;
  
  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    margin-right: 8px;
  }
`