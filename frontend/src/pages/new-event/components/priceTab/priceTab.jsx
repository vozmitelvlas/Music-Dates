import {HighlightedText, Input, PinkLayer, WhiteLayer} from "../../../../components";
import {ContinueButton} from "../continue-button/continue-button.jsx";
import styled from "styled-components";
import {useState} from "react";

const PriceTabContainer = ({className, onFinish, state}) => {
    const [priceState, setPriceState] = useState(state)

    const handlePriceChange = ({target}) => {
        setPriceState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const saveAndFinish = () => {
        onFinish({
            price: {
                ...priceState
            }
        })
    }

    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <HighlightedText>Общие расходы</HighlightedText>
                    <PinkLayer width="200px" className="to-center">
                        <div className="currency-input">
                            <Input
                                value={priceState.totalExpenses}
                                name="totalExpenses"
                                onChange={handlePriceChange}
                                type="number"
                                placeholder="0"
                                variant="accent"
                                width="300px"
                            />
                            <span className="currency-symbol">₽</span>
                        </div>
                    </PinkLayer>
                </WhiteLayer>
                <WhiteLayer>
                    <HighlightedText>Индивидуальные расходы</HighlightedText>
                    <PinkLayer width="200px" className="to-center">
                        <div className="currency-input">
                            <Input
                                value={priceState.individualExpenses}
                                onChange={handlePriceChange}
                                name="individualExpenses"
                                type="number"
                                placeholder="0"
                                variant="accent"
                                width="300px"
                            />
                            <span className="currency-symbol">₽</span>
                        </div>
                    </PinkLayer>
                </WhiteLayer>
            </div>
            <ContinueButton onClick={saveAndFinish}/>
        </div>
    )
}

export const PriceTab = styled(PriceTabContainer)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  .to-center {
    display: flex;
    justify-content: center;
  }

  .layers {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .currency-input {
    display: flex;
    position: relative;

    input {
      text-align: right;
    }
  }

  .currency-symbol {
    position: absolute;
    top: 9px;
    right: 18px;
    font-size: 16px;
    color: #797979;
    font-weight: 500;
  }
`