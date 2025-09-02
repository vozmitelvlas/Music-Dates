import styled from "styled-components";
import {Input} from "../../../input/input.jsx";
import {Img} from "../../../img/img.jsx";

const SearchContainer = ({className}) => (
    <div className={className}>
        <Input placeholder="Поиск..."/>
        <Img src="/search.svg" width="22px" height="22px"/>
    </div>
)

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 800px;

  img {
    position: absolute;
    right: 7px;
    top: 5px;
  }
`