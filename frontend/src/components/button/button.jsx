import styled from "styled-components";

const ButtonContainer = ({children, className, variant, ...props}) => (
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
  border: ${({variant}) => variant ? 'none' : '1px solid var(--accent-color)' };
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;


  background-color: ${({ variant }) => (variant === 'secondary' ? 'var(--accent-color)' : '#fff')};
  color: ${({ variant }) => (variant === 'secondary' ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: ${({ variant }) => (variant === 'secondary' ? '#d30000' : 'var(--accent-color)')};
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  };
`


