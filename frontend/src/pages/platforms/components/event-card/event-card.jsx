import {Button, Img} from "../../../../components";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

// В будующем вынести в ./компоненты и потом использовать для любых типов ивентов
const EventCardContainer = ({className, title, location, time, price, id, image}) => {
    const navigate = useNavigate()
    const toEvent = () => navigate(`event/${id}`)
    return (
        <div className={className}>
            <div className="avatar-wrapper">
                <Img src={image} onClick={toEvent} className="avatar"/>
            </div>
            <div className="title" onClick={toEvent}>{title}</div>
            <div className="address">{location}</div>
            <div className="time">{time}</div>
            <div className="price">{price} руб.</div>
            <Button onClick={toEvent}>Подробнее</Button>
        </div>
    )
}

export const EventCard = styled(EventCardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 315px;
  height: 450px;
  margin: 10px;
  border: 2px solid var(--simple-border);
  border-radius: 5px;
  background-color: #fff;

  transition: box-shadow 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
  }
  
  .avatar-wrapper{
    height: 200px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    //flex-shrink: 0;
    background-color: #f0f0f0
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

  .time {
    font-weight: bold;
  }

  .price {
    font-weight: bold;
    font-size: 18px;
  }

`