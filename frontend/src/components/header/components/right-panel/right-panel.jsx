import {Img} from "../../../img/img.jsx"
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const RightPanelContainer = ({className}) => {
    const navigate = useNavigate()

    return (
        <div className={className}>
            <div>
                <div className="circle"></div>
                <div className="name">Имя</div>
            </div>
            <div className="auth" onClick={() => navigate("login")}>
                <Img src="/login.svg" heiht="30px" width="30px" />
                <div className="name">Войти</div>
            </div>
            <div>
                <Img src="/location.svg"/>
                <div className="location">Местоположение</div>
            </div>
            <div className='cont'>
                <nav>
                    <ul className="cf">
                        <li>
                            <Img className="dropdown" src="/menu.svg"/>
                            <ul>
                                <li><a href="#">Профиль</a></li>
                                <li><a href="#">Категории</a></li>
                                <li><a href="#">Пользователи</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <Img
                    src="/exit.svg"
                    width="30px"
                    height="30px"
                    margin="0 0 0 10px"
                    onClick={() => navigate("/login")}
                />
            </div>
        </div>
    )
}

export const RightPanel = styled(RightPanelContainer)`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0 30px;

  .auth {
    gap: 5px;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin-right: 5px;
  }

  .name {
    text-decoration: underline;
  }

  .location {
    text-decoration: underline;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  nav li {
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
  }

  nav a {
    color: #444;
    width: 200px;
    display: block;
    font: normal 13px/50px Arial, Helvetica, sans-serif;
    padding: 0 25px;
    text-align: center;
    text-decoration: none;
    transition: all .25s ease;
  }


  nav li:hover a {
    background: #fff;
    color: #000000;
  }

  nav li ul {
    float: left;
    left: -118px;
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 35px;
    visibility: hidden;
    z-index: 1;
    transition: all .25s ease;
  }

  nav li:hover ul {
    opacity: 1;
    top: 35px;
    visibility: visible;
  }

  nav li ul li {
    float: none;
    width: 100%;
  }

  nav li ul a:hover {
    background: #FFCCCC;
  }

`