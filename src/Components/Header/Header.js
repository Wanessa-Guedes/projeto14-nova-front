import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
import { useContext } from "react";

import { ContainerHeader, ImgHeader, Background, TitleHeader, IconsHeader, IconDisplayCart, IconDisplayUser, IconDisplayExit } from "./styled"
import Context from "../../Context/Context";

export default function Header(){

    const sessionToken = localStorage.getItem("token");
    const sessionName = localStorage.getItem("name");
    const {token, setToken} = useContext(Context);
    const navigate = useNavigate();

    function clearSessionData(){
            console.log(token)
            const promise = axios.put("http://localhost:5000/logout", {}, {
                headers: {"Authorization": `Bearer ${token}`}
            });
            promise.then(res => {
                    swal(`${res.data}`,"", "success")
                    navigate("/")});
            promise.catch(e => {swal(`${e.response.data}`, "", "error")
                                        navigate("/")}); // Ver certinho

        localStorage.removeItem("name");
        localStorage.removeItem("token");
    }

    return (
        <ContainerHeader>
            <ImgHeader>
                <Background>
                            <TitleHeader>
                                <h1>Nova</h1>
                            </TitleHeader>
                        <IconsHeader>
                            <IconDisplayCart aria-haspopup="true">
                                <span><ion-icon name="cart-outline"></ion-icon></span>
                                <p>Carrinho</p>
                            </IconDisplayCart>
                            <IconDisplayUser aria-haspopup="true" to="/signin">
                                <span ><ion-icon name="person-outline"></ion-icon></span>
                                <p>Login /
                                    Cadastro</p>
                            </IconDisplayUser>
                            <IconDisplayExit aria-haspopup="true" to="/" onClick={clearSessionData}>
                                <span><ion-icon name="exit-outline"></ion-icon></span>
                                <p>Encerrar sessão</p>
                            </IconDisplayExit>
                        </IconsHeader>
                </Background>
            </ImgHeader>
        </ContainerHeader>
    )
}