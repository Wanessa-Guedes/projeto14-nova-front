import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ConfirmantionPage from "../ConfirmationScreen/Confirmation";
import Context from "../../Context/Context";
import Home from "./../Home/Home.js";
import ShoppingCart from "./../ShoppingCart/ShoppingCart.js";

export default function App() {

    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");
    const [userCart, setUserCart] = useState([]);

    return (
        <BrowserRouter>
            <Context.Provider value = {{token, setToken, userName, setUserName, userCart, setUserCart}}>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route> 
                    <Route path="/cart" element={<ShoppingCart/>}></Route>
                    <Route path="/confirmation" element={<ConfirmantionPage />}></Route>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    )
}