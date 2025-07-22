import styled from "styled-components";

const ImgContainer = ({src, className, inactive, ...props}) => {
    return (
        <div className={className} {...props}>
            <img src={src} alt={src.toString()}/>
        </div>
    )
}

export const Img = styled(ImgContainer)`
  img {
    width: ${({width = '24px'}) => width};
    height: ${({height = '24px'}) => height};
    margin: ${({margin = '0'}) => margin};
    cursor: ${({inactive}) => (inactive ? 'default' : 'pointer')};
    vertical-align: middle;
    display: inline-block;
  }
`