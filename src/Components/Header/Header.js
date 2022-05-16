import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { ContainerHeader, ImgHeader, Background, TitleHeader, IconsHeader, IconDisplayCart, 
            IconDisplayUser, IconDisplayExit, MainHeader } from "./styled"
import Context from "../../Context/Context";

export default function Header(){

    const sessionToken = localStorage.getItem("token");
    const sessionName = localStorage.getItem("name");
    //const {token, setToken} = useContext(Context);
    const {userCart} = useContext(Context);
    const config = {headers: {Authorization: `Bearer ${sessionToken}`}};

    const navigate = useNavigate();

    function sendList(){
        if(!sessionToken){
            navigate("/signin");
        } else {
            const URL_Cart = "http://localhost:5000/cart";
            const request = axios.post(URL_Cart, userCart, config);
            request.then((response) => {
                console.log("item adicionado ao carrinho", response);
                navigate("/cart");
                });
            request.catch((erro) => console.log("erro ao adicionar produto", erro));
        }
    }

    function clearSessionData(){

        if(sessionName){
            const promise = axios.delete("http://localhost:5000/logout", {
                headers: {"Authorization": `Bearer ${sessionToken}`}
            });
            promise.then(res => {
                    swal(`${res.data}`,"", "success")
                    navigate("/")});
            promise.catch(e => {swal(`${e.response.data}`, "", "error")
                                        navigate("/")}); // Ver certinho

        localStorage.removeItem("name");
        localStorage.removeItem("token");} else {
            swal("Ops!","Você precisa estar logado para isso!", "info");
        }
    };

    return (
        <ContainerHeader>
            <ImgHeader>
                <Background>
                        <MainHeader>
                            {
                                    (sessionName)? (
                                    <p>{sessionName}, seja bem-vinda(o) à </p>) : (<></>)
                                }
                            <TitleHeader>
                                <h1>Nova</h1>
                            </TitleHeader>
                        </MainHeader>
                        <IconsHeader>
                            <IconDisplayCart aria-haspopup="true" onClick={sendList}>
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