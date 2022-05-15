
import { ContainerHeader, ImgHeader, Background, TitleHeader, IconsHeader, IconDisplayCart, IconDisplayUser, IconDisplayExit } from "./styled"
import Context from "../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header(){
    const {userCart, token} = useContext(Context);
    const navigate = useNavigate();
    console.log(userCart);

    function sendUserCart(){
        const config = {headers: {Authorization: `Bearer ${token}`}};
        const URL_Cart = "http://localhost:8000/cart";
        const request = axios.post(URL_Cart, userCart, config);
        request.then((response) => {
            console.log("item adicionado ao carrinho", response);
            navigate("/cart");
            });
        request.catch((erro) => console.log("erro ao adicionar produto", erro));
    }

    return (
        <ContainerHeader>
            <ImgHeader>
                <Background>
                            <TitleHeader>
                                <h1>Nova</h1>
                            </TitleHeader>
                        <IconsHeader>
                            <IconDisplayCart aria-haspopup="true" onClick={sendUserCart}>
                                <span><ion-icon name="cart-outline"></ion-icon></span>
                                <p>Carrinho</p>
                            </IconDisplayCart>
                            <IconDisplayUser aria-haspopup="true" to="/signin">
                                <span ><ion-icon name="person-outline"></ion-icon></span>
                                <p>Login /
                                    Cadastro</p>
                            </IconDisplayUser>
                            <IconDisplayExit aria-haspopup="true">
                                <span><ion-icon name="exit-outline"></ion-icon></span>
                                <p>Encerrar sessão</p>
                            </IconDisplayExit>
                        </IconsHeader>
                </Background>
            </ImgHeader>
        </ContainerHeader>
    )
}