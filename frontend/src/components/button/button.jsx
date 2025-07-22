import styled from "styled-components";

const ButtonContainer = ({children, className, width, ...props}) => (
    <button className={className} {...props}>
        {children}
    </button>
)

export const Button = styled(ButtonContainer)`
  width: ${({width = '100%'}) => width};
  height: 36px;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: none;
  background-color: #DF1212;
  color: #fff;

  &:hover {
    cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
  }
`