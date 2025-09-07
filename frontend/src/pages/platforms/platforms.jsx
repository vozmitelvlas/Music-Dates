import styled from "styled-components";
import {useEffect, useState} from "react";
import {EventCard} from "./components";
import {apiClient} from "../../utils";
import {H1} from "../../components";

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
            <H1>Музыкальные площадки в Санкт-Петербурге</H1>
            <div className="special-panel"></div>

            <div className="list">
                {platforms.map(({
                                    id,
                                    description: {title, location, image},
                                    time: {eventStartTimes},
                                    price: {totalExpenses}
                                }) => (
                    <EventCard
                        key={id}
                        id={id}
                        title={title}
                        location={location}
                        time={eventStartTimes[0]}
                        price={totalExpenses}
                        image={image}
                    />
                ))}
            </div>
        </div>
    )
}

export const Platforms = styled(PlatformsContainer)`
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .special-panel {
    border: 2px solid var(--simple-border);
    margin: 10px;
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
  }
`