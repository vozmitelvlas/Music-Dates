import styled from "styled-components";

const TabButtonsContainer = ({className, activeTab, setActiveTab}) => {
    return (
        <div className={className}>
            <button
                className={activeTab === 'description' ? 'active' : ''}
                onClick={() => setActiveTab('description')}
            >
                Описание
            </button>
            <button
                className={activeTab === 'participants' ? 'active' : ''}
                onClick={() => setActiveTab('participants')}
            >
                Участники
            </button>
            <button
                className={activeTab === 'time' ? 'active' : ''}
                onClick={() => setActiveTab('time')}
            >
                Время
            </button>
            <button
                className={activeTab === 'price' ? 'active' : ''}
                onClick={() => setActiveTab('price')}
            >
                Цена
            </button>
        </div>
    )
}

export const TabButtons = styled(TabButtonsContainer)`
  display: flex;
  margin: 0 auto 20px;
  gap: 1px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  width: 400px;

  button {
    width: 100px;
    padding: 12px 16px;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  }

  button.active {
    background-color: #DF1212;
    color: white;
  }
`