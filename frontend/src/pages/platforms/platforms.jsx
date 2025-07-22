import styled from "styled-components";
import {useEffect, useState} from "react";
import {EventCard} from "./components";
import {apiClient} from "../../utils";

const PlatformsContainer = ({className}) => {
    const [platforms, setPlatforms] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        apiClient('/platforms')
            .then(platforms => setPlatforms(platforms))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className={className}>
            <h1>Музыкальные площадки в Санкт-Петербурге</h1>
            <div className="special-panel">

            </div>
            <div className="list">
                {platforms.map(({title, address, time, price, id}) => (
                    <EventCard
                        key={id}
                        title={title}
                        address={address}
                        time={time}
                        price={price}
                    />
                ))}
            </div>
        </div>
    )
}

export const Platforms = styled(PlatformsContainer)`
  .list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 130px;
  }

  .special-panel {
    border: 2px solid #e1e1e1;
    margin: 10px;
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
  }
`