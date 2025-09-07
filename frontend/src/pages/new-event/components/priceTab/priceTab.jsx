import {HighlightedText, Input, PinkLayer, WhiteLayer} from "../../../../components";
import {NavigateButtons} from "../navigate-buttons/navigate-buttons.jsx";
import styled from "styled-components";
import {useState} from "react";

const PriceTabContainer = ({className, setEvent, state}) => {
    const handlePriceChange = ({target}) => {
        setEvent(prevState => ({
            ...prevState,
            price: {
                ...prevState.price,
                [target.name]: target.value
            }
        }))
    }

    return (
        <div className={className}>
            <div className="layers">
                <WhiteLayer>
                    <HighlightedText>Общие расходы</HighlightedText>
                    <PinkLayer width="200px" className="to-center">
                        <div className="currency-input">
                            <Input
                                value={state.totalExpenses}
                                name="totalExpenses"
                                onChange={handlePriceChange}
                                type="number"
                                placeholder="0"
                                variant="accent"
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
                                value={state.individualExpenses}
                                onChange={handlePriceChange}
                                name="individualExpenses"
                                type="number"
                                placeholder="0"
                                variant="accent"
                            />
                            <span className="currency-symbol">₽</span>
                        </div>
                    </PinkLayer>
                </WhiteLayer>
            </div>
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
    top: 3.5px;
    right: 18px;
    font-size: 16px;
    color: #000;
    font-weight: 500;
  }
`