import { Container, ContainerList, Subtitle, ContainerTitle, Button, ButtonDiv, Image, Name, FooterCart, Div, Anchor, } from "./style";
import {BiTrash} from "react-icons/bi";
import axios from "axios";
import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart(){
    const {userCart, token, setUserCart} = useContext(Context);
    const sessionToken = localStorage.getItem("token");
    const sessionName = localStorage.getItem("name");
    const navigate = useNavigate();
    const subtitles = ["Produto", "Preço", "Excluir"]
    

    let total = 0;
    if(userCart){
    for(let i = 0; i < userCart.length; i++){
        total += parseFloat((userCart[i].price).replace(",", "."));
    }
    let totalFinal = localStorage.setItem("total", total);
}

    useEffect(() => {
        const URL_UserList = "http://localhost:5000/cart";
        const request = axios.get(URL_UserList, {headers: {Authorization: `Bearer ${sessionToken}`}} );
        request.then(response => setUserCart(response.data.cart));
        request.catch(erro => console.log("erro ao buscar produtos", erro));
    }, [token, setUserCart]);

    function deleteItem(id){
        const URL_Cart = `http://localhost:5000/cart/${id}`;
        const request = axios.delete(URL_Cart, {headers: {Authorization: `Bearer ${sessionToken}`}});
        request.then((response) => {
            console.log("nova lista", response.data);
            setUserCart(response.data)
            });
        request.catch((erro) => console.log("erro ao deletar produto", erro));
    }
    
    return(
        <Container>
            <ContainerTitle>
                    <Div>
                        <ContainerList>
                            {subtitles.map((sub,i)=> <Subtitle key={i}>{sub}</Subtitle>)}
                        </ContainerList>
                        {userCart?.map((product, i) => 
                        <ContainerList key={i}>
                                <Subtitle>
                                    <Image src={product.image} alt={product.name}/>
                                    <Name>{product.name}</Name>
                                </Subtitle>
                                <Name>R$ {product.price}</Name>
                                <Subtitle><BiTrash color="red" size="20" onClick={() => deleteItem(product._id)}/></Subtitle>
                        </ContainerList>
                        )}               
                    </Div>   
                    <FooterCart>
                        <ButtonDiv>
                            <Button onClick={() => navigate("/confirmation")}>Finalizar compra</Button>
                            <Anchor to="/">Continuar comprando</Anchor>
                        </ButtonDiv>
                        <Name>Total: R$ {(total).toFixed(2).replace(".",",")}</Name>
                    </FooterCart>
            </ContainerTitle>
        </Container>
    );
}