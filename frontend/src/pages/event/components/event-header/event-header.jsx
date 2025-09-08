import {formatDuration, participantsAmountFormat, participantsSexFormat} from "../../../../utils";
import {Button, H1, HighlightedText, Img, PinkLayer, WhiteLayer} from "../../../../components";
import {selectEvent, selectUserId, selectUserRole} from "../../../../store/selectors";
import {CLOSE_MODAL, openModal} from "../../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {removeEventAsync} from "../../../../api";
import {useNavigate} from "react-router-dom";
import {ROLE} from "../../../../constants";
import styled from "styled-components";

const HeaderContainer = ({className}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const roleId = useSelector(selectUserRole)
    const userId = useSelector(selectUserId)
    const {description, time, price, participants, id, organizerId} = useSelector(selectEvent)

    const toEditEventPage = () => navigate(`edit`)

    const onEventRemove = () => {
        dispatch(openModal({
            text: 'Удалить событие?',
            onConfirm: () => {
                dispatch(removeEventAsync(id)).then(() => {
                    navigate('/platforms')
                })
                dispatch(CLOSE_MODAL)
            },
            onCancel: () => dispatch(CLOSE_MODAL)
        }))
    }

    const isOrganizer = userId && organizerId && userId === organizerId


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
                        <Img src={description.image || null} className="avatar" inactive/>
                    </div>
                </WhiteLayer>

                <WhiteLayer className="main-panel">
                    <HighlightedText>{price.totalExpenses} руб.</HighlightedText>
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

                    {(roleId === ROLE.ADMIN || isOrganizer) && (
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