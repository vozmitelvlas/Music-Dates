import styled from "styled-components";
import {Button, Img} from "../../../../components";

const EventCardContainer = ({className, title, address, time, price}) => {
    return (
        <div className={className}>
            <Img
                // width="270px"
                // height="170px"
                src="/background.jpg"
            />

            <div className="title">{title}</div>
            <div className="address">{address}</div>
            <div className="time">{time}</div>
            <div className="price">{price}</div>
            <Button>Подробнее</Button>
        </div>
    )
}

export const EventCard = styled(EventCardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 350px;
  height: 450px;
  margin: 10px;
  border: 2px solid #e1e1e1;
  border-radius: 5px;
  background-color: #fff;

  transition: box-shadow 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
  }

  img {
    cursor: pointer;
    width: 100%;
    height: 200px; /* или auto — зависит от дизайна */
    object-fit: contain;
    display: block;
  }

  .title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .address {
    font-size: 12px;
    color: #b9b9b9;
  }
  
  .time{
    font-weight: bold;
  }
  .price{
    font-weight: bold;
    font-size: 18px;
  }
  
`