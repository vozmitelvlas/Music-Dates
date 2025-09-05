import {Routes, Route} from "react-router-dom";
import {Footer, Header} from "./components";
import {Categories, Login, Platforms, Register, Event, NewEvent} from "./pages";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 1340px;
  margin: 0 auto;
`

const Page = styled.div`
  flex: 1;
  display: flex;
  border-radius: 15px;
  margin: 70px 0 120px;
  justify-content: center;
  
  //background: rgba(255, 255, 255, 0.69);
`

const CenteredContent = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

function App() {

    return (
        <AppColumn>
            <Header/>
            <Page>
                <Routes>
                    <Route path="/" element={<Categories/>}></Route>
                    <Route path="/login" element={<CenteredContent><Login/></CenteredContent>}></Route>
                    <Route path="/register" element={<CenteredContent><Register/></CenteredContent>}></Route>
                    <Route path="/platforms" element={<Platforms/>}></Route>
                    <Route path="platforms/event/:id" element={<Event/>}></Route>
                    <Route path="/lessons" element={<div>уроки</div>}></Route>
                    <Route path="/parties" element={<div>квартирники</div>}></Route>
                    <Route path="/users" element={<div>пользователи</div>}></Route>
                    <Route path="/new-event" element={<NewEvent/>}></Route>
                    <Route path="*" element={<div>error page</div>}></Route>
                </Routes>
            </Page>
            <Footer/>
        </AppColumn>

    )
}

export default App
