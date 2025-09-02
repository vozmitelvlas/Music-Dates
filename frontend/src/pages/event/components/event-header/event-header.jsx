import {Button, H1, HighlightedText, Img, PinkLayer, WhiteLayer} from "../../../../components";
import styled from "styled-components";

const HeaderContainer = ({className, event}) => {
    return (
        <div className={className}>
            <H1>{event.title}</H1>
            <div className="tmp">Категория: Объявления</div>
            <div className="header">
                <WhiteLayer className="photos">
                    <div className="next-photos">
                        <div className="next-photo"></div>
                        <div className="next-photo"></div>
                        <div className="next-photo"></div>
                    </div>

                    <div className="avatar-wrapper">
                        <Img src={event.image || null} className="avatar" inactive/>
                    </div>
                </WhiteLayer>

                <WhiteLayer className="main-panel">
                    <HighlightedText>{event.price} руб.</HighlightedText>
                    <div className="send-button">
                        <Button variant="primary">Отправить заявку</Button>
                    </div>

                    <HighlightedText>О событии</HighlightedText>
                    <PinkLayer className="main-info">
                        <div><b>Ограничения: </b> парни, от 10 до 20</div>
                        <div><b>Кол-во участников:</b> 1 - 5 чел.</div>
                        <div><b>Дата и время:</b> {event.time}</div>
                        <div><b>Длительность:</b> 02:00</div>
                        <div><b>Жанр:</b> что-то</div>
                        <div><b>Опыт:</b> {event.time} </div>
                    </PinkLayer>
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

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .send-button {
    margin: 12px 20px;
  }
`