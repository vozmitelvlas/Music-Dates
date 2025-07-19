import styled from "styled-components";

const InputContainer = ({className, ...props}) =>
    <input className={className} {...props}/>

export const Input = styled(InputContainer)`
  width: ${({width = '100%'}) => width};
  height: 35px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #afabab;
`