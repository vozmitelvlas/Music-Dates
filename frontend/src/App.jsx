import {Routes, Route} from "react-router-dom";
import {Footer, Header} from "./components";
import {Categories, Login, Platforms, Register} from "./pages";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  height: 100%;
  width: 1480px;
  margin: 0 auto;
  position: relative;
`

const Page = styled.div`
  //display: flex;
  //align-items: center;
  //flex: 1;
  //border-radius: 15px;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 120px;
`

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
                    <Route path="/lessons" element={<div>уроки</div>}></Route>
                    <Route path="/parties" element={<div>квартирники</div>}></Route>
                    <Route path="/users" element={<div>пользователи</div>}></Route>
                    <Route path="*" element={<div>error page</div>}></Route>
                </Routes>
            </Page>
            <Footer/>
        </AppColumn>
    )
}

export default App
