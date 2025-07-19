import styled from "styled-components";
import {Logo, RightPanel, Search} from "./components";

const HeaderContainer = ({className}) => (
    <header className={className}>
        <Logo/>
        <Search/>
        <RightPanel/>
    </header>
)

export const Header = styled(HeaderContainer)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -2px 17px #000;
  z-index: 20;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

`