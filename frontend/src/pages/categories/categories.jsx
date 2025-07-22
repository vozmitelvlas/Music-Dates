import {Category} from "./components/index.js";
import styled from "styled-components";

export const CategoriesContainer = ({className}) => {
    return (
        <div className={className}>
            <h1>Категории</h1>
            <div className="list">
                <Category src="/lessons.jpg" to={"/lessons"}>Уроки музыки</Category>
                <Category src="/parties.jpg" to={"/parties"}>Квартирники</Category>
                <Category src="/concerts.jpg" to={"/platforms"}>Музыкальные площадки</Category>
            </div>
        </div>
    )
}

export const Categories = styled(CategoriesContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 30px;
  }

`