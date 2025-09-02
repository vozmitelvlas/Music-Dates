import styled from "styled-components";

const sizesMap = {
    small: '100px',
    medium: '300px',
    large: '600px',
}

export const PinkLayer = styled.div`
  min-height: ${props => props.height || '100px'};
  width: ${props => props.width || ''};
  
  background-color: #FFE9E9;
  border-radius: 8px;
  margin: 20px;
  padding: 10px;

  font-size: 16px;
  line-height: 1.5;
  
  color: #4f4f4f;

  outline: none;
  cursor: ${(props) => (props.contentEditable ? 'text' : 'default')};
  white-space: pre-wrap;
  word-wrap: break-word;
  
  overflow-wrap: break-word;
  max-width: 100%;
  box-sizing: border-box;

  &[data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: #aaa;
    opacity: 0.7;
    pointer-events: none;
    display: inline-block;
  }

  &:focus {
    box-shadow: 0 0 0 2px #DF1212;
  }
`