import styled from "styled-components";
import {Input} from "../../../input/input.jsx";
import {Img} from "../../../img/img.jsx";

const SearchContainer = ({className}) => (
    <div className={className}>
        <Input placeholder="Поиск..."/>
        <Img src="/search.svg" size="22px"/>
    </div>
)

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 800px;
  
  div{
    position: absolute;
    right: 7px;
    top: 3px;
  }
`