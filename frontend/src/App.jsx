import {Routes, Route} from "react-router-dom";
import {Header} from "../components";
import './App.css'
import {Categories} from "../pages/index.js";

function App() {

    return (
        <div className="app-column">
            <Header/>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Categories/>}></Route>
                    <Route path="/login" element={<div>page</div>}></Route>
                    <Route path="/register" element={<div>page</div>}></Route>
                    <Route path="/users" element={<div>page</div>}></Route>
                    <Route path="*" element={<div>error page</div>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App
