import { ContainerHome, ContainerProduct, Photo, Name, Description, Price, Icon, Itens } from "./style.js";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import shoppingCart from "./../../Assets/imgs/shopping-cart.png"
import axios from "axios";
import swal from 'sweetalert';


export default function Home(){
    const sessionToken = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const URL_Products = "https://project14-nova-e-commerce.herokuapp.com/home";
        const request = axios.get(URL_Products);
        request.then(response => setProducts(response.data));
        request.catch(erro => console.log("erro ao buscar produtos", erro));
    }, []);

    function buyItem (product){
        console.log(product);
        if(!sessionToken){
            swal("Você não está logado(a)!", "Por favor, faça o login para continuar!", "warning");
            navigate("/signin");
            
        } else{
            const config = {headers: {Authorization: `Bearer ${sessionToken}`}};
            const URL_Cart = "https://project14-nova-e-commerce.herokuapp.com/cart";
            const request = axios.post(URL_Cart, product, config);
            request.then((response) => {
                console.log("item adicionado ao carrinho", response);
                });
            request.catch((erro) => console.log("erro ao adicionar produto", erro));
        }
    }
    
    return (
            <ContainerHome>
                {products.map((product, i) => 
                    <ContainerProduct key={i} id={product._id} category={product.category}>
                        <Photo src={product.image} alt={product.name}/>
                        <Name>{product.name}</Name>
                        <Description>{product.description}</Description>
                        <Itens>
                            <Price>R$ {product.price}</Price>
                            <Icon src={shoppingCart} alt="adicionar ao carrinho" value={product} id={product._id} 
                                    onClick={() => buyItem(product)} />
                        </Itens>
                    </ContainerProduct> 
                )}        
            </ContainerHome>
    );
}

