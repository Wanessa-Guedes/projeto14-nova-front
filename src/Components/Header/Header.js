
import { ContainerHeader, ImgHeader, Background, TitleHeader, IconsHeader, IconDisplayCart, IconDisplayUser, IconDisplayExit } from "./styled"

export default function Header(){

    function clearSessionData(){
        //TODO: TEM QUE FAZER UM POST AQUI
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
                            <IconDisplayExit aria-haspopup="true" to="/home" onClick={clearSessionData}>
                                <span><ion-icon name="exit-outline"></ion-icon></span>
                                <p>Encerrar sessão</p>
                            </IconDisplayExit>
                        </IconsHeader>
                </Background>
            </ImgHeader>
        </ContainerHeader>
    )
}