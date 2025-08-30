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
  border: ${({variant}) => variant ? 'none' : '1px solid #DF1212' };
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;


  background-color: ${({variant}) => {
    switch (variant) {
      case 'primary':
        return "#DF1212";
      default:
        return '#fff';
    }
  }};
  color: ${({variant}) => {
    switch (variant) {
      case 'primary':
        return '#fff';
      default:
        return '#000';
    }
  }};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: ${({variant}) => {
      switch (variant) {
        case 'primary':
          return 'rgb(223,18,18)';
        default:
          return '#DF1212';
      }
    }};
    color: ${({variant}) => {
      switch (variant) {

        default:
          return '#fff';
      }
    }};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  };
`


