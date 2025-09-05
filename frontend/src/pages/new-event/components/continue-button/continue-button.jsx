import {Button} from "../../../../components";
import styled from "styled-components";
import {tabs} from "../../constants";

const ContinueButtonContainer = ({className, activeTab, onClick}) => {
    const currentIndex = tabs.indexOf(activeTab)
    const isLast = currentIndex === tabs.length - 1

    return (
        <div className={className}>
            <Button
                variant="secondary"
                width="300px"
                onClick={onClick}

            >
                {isLast ? 'Создать событие' : 'Продолжить'}
            </Button>
        </div>
    )
}

export const ContinueButton = styled(ContinueButtonContainer)`
  display: flex;
  width: 100%;
  justify-content: right;
`
