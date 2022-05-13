import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import ConfirmantionPage from "../ConfirmationScreen/Confirmation";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/signup" element={<SignUp />}></Route> 
                    <Route path="/confirmation" element={<ConfirmantionPage />}></Route>
                </Routes>
        </BrowserRouter>
    )
}