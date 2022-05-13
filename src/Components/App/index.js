import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import Home from "./../Home/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/signup" element={<SignUp />}></Route> 
                </Routes>
        </BrowserRouter>
    )
}