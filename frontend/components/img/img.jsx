import styled from "styled-components";

const ImgContainer = ({src, className, ...props}) => {
    return (
        <div className={className}>
            <img src={src} alt={src.toString()}/>
        </div>
    )
}

export const Img = styled(ImgContainer)`
  img {
    width: ${({ size = '24px' }) => size};
    height: ${({ size = '24px' }) => size};
    margin: ${({ margin = '0' }) => margin};
    cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
    vertical-align: middle;
    display: inline-block;
  }
`