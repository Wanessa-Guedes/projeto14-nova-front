import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Context from "../../Context/Context";

export default function App() {

    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <BrowserRouter>
            <Context.Provider value = {{token, setToken, userName, setUserName}}>
            <Header/>
                <Routes>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route> 
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    )
}