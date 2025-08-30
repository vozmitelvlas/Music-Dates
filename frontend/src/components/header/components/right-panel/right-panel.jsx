import {Popup} from "./components";
import {useNavigate} from "react-router-dom";
import {Img} from "../../../img/img.jsx"
import {useSelector} from "react-redux";
import styled from "styled-components";
import {Button} from "../../../button/button.jsx";

const RightPanelContainer = ({className}) => {
    const navigate = useNavigate()
    const userName = useSelector(state => state.user.name)

    return (
        <div className={className}>
            {userName ? (
                <div>
                    <div className="circle"></div>
                    <div className="name">{userName}</div>
                </div>
            ) : (
                <Popup position="center" width="300px" trigger={
                    <div className="auth" onClick={() => navigate("login")}>
                        <div className="circle"></div>
                        <div>Vlas</div>
                    </div>
                }>
                    <div className="for-client">
                        <div className="header">
                            <div className="circle"></div>
                            <div>Vlas Vozmitel</div>
                        </div>
                        <Button>Профиль</Button>
                        <Button>Выйти</Button>
                    </div>
                </Popup>
            )}
            <div>
                <Img src="/location.svg"/>
                <div className="location">Местоположение</div>
            </div>
            <Popup position="right" trigger={<Img src="/menu.svg"/>}>
                <ul className="dropdown-list">
                    <li><a href="#">Профиль</a></li>
                    <li><a href="#">Категории</a></li>
                    <li><a href="#">Пользователи</a></li>
                </ul>
            </Popup>
        </div>
    )
}


export const DropDown = ({children}) => {
}

export const RightPanel = styled(RightPanelContainer)`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0 30px;

  .for-client {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    width: 100%;
    margin: 10px;
    gap: 10px;
    background-color: #FFCCCC;
    border-radius: 6px;

    .header {
      display: flex;
      width: 100%;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .auth {
    display: flex;
    text-decoration: underline;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin-right: 5px;
  }

  .location {
    text-decoration: underline;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li {
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 200px;
    height: 45px;
    padding: 0 25px;
    transition: all .25s ease;
  }

  .dropdown-list a:hover {
    background: #FFCCCC;
  }
`