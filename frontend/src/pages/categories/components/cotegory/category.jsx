import styled from "styled-components";
import {Link} from "react-router-dom";

const CategoryContainer = ({className, children, src, to}) => {
    return (
        <Link className={className} to={to}>
            <div>{children}</div>
            <img className="img" src={src}/>
        </Link>
    )
}

export const Category = styled(CategoryContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  text-decoration: underline;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;

  .img {
    margin: 10px;
    width: 350px;
    height: 450px;
    border-radius: 8px;
    object-fit: cover;
  }

  transition: box-shadow 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 0px 9px 1px rgba(34, 60, 80, 0.14);
  }


`