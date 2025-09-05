import {ContinueButton} from "../continue-button/continue-button.jsx";
import {Sex, Amount, Age} from "./components";
import {useState} from "react";
import styled from "styled-components";

const ParticipantsTabContainer = ({className, onNext, state}) => {
    const [participantsState, setParticipantsState] = useState(state)
    const handleChange = ({target}) => {
        if (target.name === "isAgeUnlimited") {
            setParticipantsState(prevState => ({
                ...prevState,
                isAgeUnlimited: target.checked,
                ageFrom: target.checked ? '' : prevState.ageFrom,
                ageTo: target.checked ? '' : prevState.ageTo,
            }))
        } else {
            setParticipantsState(prevState => ({
                ...prevState,
                [target.name]: target.value
            }))
        }
    }

    const saveAndNext = () => {
        onNext({
            participants: {
                ...participantsState
            }
        })
    }

    return (
        <div className={className}>
            <div className="layers">
                <Amount
                    amountFrom={participantsState.amountFrom}
                    amountTo={participantsState.amountTo}
                    handleChange={handleChange}
                />

                <Sex
                    sex={participantsState.sex}
                    handleChange={handleChange}
                />

                <Age
                    ageTo={participantsState.ageTo}
                    ageFrom={participantsState.ageFrom}
                    isAgeUnlimited={participantsState.isAgeUnlimited}
                    handleChange={handleChange}
                />
            </div>
            <ContinueButton onClick={saveAndNext}/>
        </div>
    )
}

export const ParticipantsTab = styled(ParticipantsTabContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  .layers {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }


`