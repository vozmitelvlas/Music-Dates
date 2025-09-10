import {formatDuration, participantsAmountFormat, participantsSexFormat} from "../../../../utils";
import {Button, HighlightedText, Img, PinkLayer, WhiteLayer} from "../../../../components";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = ({className, description, cost, time, participants, onEventRemove, isOrganizer, isAdmin}) => {
    const navigate = useNavigate()
    const toEditEventPage = () => navigate(`edit`)

    return (
        <div className={className}>
            <h1>{description.title}</h1>
            <div className="tmp">Категория: Объявления</div>
            <div className="header">
                <WhiteLayer className="photos">
                    <div className="next-photos">
                        <div className="next-photo"></div>
                        <div className="next-photo"></div>
                        <div className="next-photo"></div>
                    </div>

                    <div className="avatar-wrapper">
                        <Img src={description.photo || null} className="avatar" inactive/>
                    </div>
                </WhiteLayer>

                <WhiteLayer className="main-panel">
                    <HighlightedText>{cost}</HighlightedText>
                    <div className="send-button">
                        <Button variant="light">Отправить заявку</Button>
                    </div>

                    <div>
                        <HighlightedText>О событии</HighlightedText>
                        <PinkLayer>
                            {participants.sex !== 'any' &&
                                <div><b>Ограничения: </b>{participantsSexFormat(participants)}</div>}
                            <div><b>Кол-во участников: </b>{participantsAmountFormat(participants)}</div>
                            <div><b>Дата и время: </b>{time.eventStartTimes[0]}</div>
                            <div><b>Адрес: </b>{description.location}</div>
                            <div><b>Длительность: </b>{formatDuration(time.duration)}</div>
                            <div><b>Опыт:</b> {description.skill} </div>
                        </PinkLayer>
                    </div>

                    {(isAdmin || isOrganizer) && (
                        <div className="special-buttons">
                            <Button variant="light" width="170px" onClick={toEditEventPage}>
                                Редактировать
                            </Button>
                            <Button width="170px" variant="light" onClick={onEventRemove}>
                                Удалить
                            </Button>
                        </div>
                    )}
                </WhiteLayer>
            </div>
        </div>
    )
}

export const EventHeader = styled(HeaderContainer)`
  .header {
    display: flex;
    justify-content: space-between;
    height: 390px;
    margin: 10px 0 20px;
  }

  .main-photo {
    border-radius: 8px;
    width: 576px;
    height: 100%;
  }

  .avatar-wrapper {
    width: 576px;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: #f5f5f5;
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .main-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
  }

  .tmp {
    color: #fff;
  }

  .photos {
    display: flex;
    width: 720px;
    gap: 10px;
  }

  .next-photos {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .next-photo {
    height: 60px;
    width: 100px;
    background-color: #000;
  }

  .send-button {
    margin: 0 20px;
  }

  .special-buttons {
    display: flex;
    justify-content: right;
    gap: 20px;
    margin: -10px 20px 0;
  }
`