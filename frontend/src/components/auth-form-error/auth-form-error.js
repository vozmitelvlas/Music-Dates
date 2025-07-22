import styled from "styled-components";

export const Error = styled.div`
  background-color: ${({children}) => children ? "#fcadad" : ""};
  height: 40px;
  font-size: 16px;
  padding: 10px;
  margin: ${props => props.$margin || 0};
`