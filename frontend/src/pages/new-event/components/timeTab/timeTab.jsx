import {selectEventDuration, selectEventStartTime} from "../../../../selectors";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import {WhiteLayer} from "../../../../components";
import {DateTime, Duration} from "./components";
import {useSelector} from "react-redux";
import {useState} from "react";
import styled from "styled-components";


const TimeTabContainer = ({className, onNext, state}) => {
    const [duration, setDuration] = useState(state.duration)
    const [timeSlots, setTimeSlots] = useState(() => (
            state.startTime.length ? state.startTime.map((dateTime, i) => ({
                    id: i + 1,
                    dateTime
                }))
                : [{id: Date.now(), dateTime: ''}]
        )
    )

    const handleChangeDuration = ({target}) => setDuration(prev => ({...prev, [target.name]: Number(target.value)}))

    const handleTimeChange = ({target}) => {
        const {id, value} = target
        setTimeSlots((prev) =>
            prev.map((slot) => slot.id === Number(id) ? {...slot, dateTime: value} : slot)
        )
    }

    const addTimeSlot = () =>
        setTimeSlots((prev) => [
            ...prev,
            {id: Date.now(), dateTime: ''},
        ])

    const removeTimeSlot = (id) => setTimeSlots((prev) => prev.filter((slot) => slot.id !== id))

    const saveAndNext = () => {
        const timeValues = timeSlots.filter(slot => slot.dateTime).map(slot => slot.dateTime)
        onNext({
            time: {
                startTime: timeValues,
                duration,
            }
        })
    }

    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <DateTime
                        timeSlots={timeSlots}
                        handleTimeChange={handleTimeChange}
                        addTimeSlot={addTimeSlot}
                        removeTimeSlot={removeTimeSlot}
                    />
                </WhiteLayer>

                <WhiteLayer>
                    <Duration
                        duration={duration}
                        handleChange={handleChangeDuration}
                    />
                </WhiteLayer>
            </div>
            <ContinueButton onClick={saveAndNext}/>
        </div>
    )
}

export const TimeTab = styled(TimeTabContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  .layers {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }


`