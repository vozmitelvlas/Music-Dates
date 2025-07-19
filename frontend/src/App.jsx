import {Routes, Route} from "react-router-dom";
import {Footer, Header} from "../components";
import {Categories} from "../pages";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
  min-height: 100vh;
`

const Page = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  /*position: relative;*/
  flex: 1;
  margin: 100px 50px 50px 50px;
  padding: 15px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.52);
`

function App() {

    return (
        <AppColumn>
            <Header/>
            <Page>
                <Routes>
                    <Route path="/" element={<Categories/>}></Route>
                    <Route path="/login" element={<div>page</div>}></Route>
                    <Route path="/register" element={<div>page</div>}></Route>
                    <Route path="/users" element={<div>page</div>}></Route>
                    <Route path="*" element={<div>error page</div>}></Route>
                </Routes>
            </Page>

            <Footer/>
        </AppColumn>
    )
}

export default App
