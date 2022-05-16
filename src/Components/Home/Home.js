import { ContainerHome, ContainerProduct, Photo, Name, Description, Price, Icon, Itens } from "./style.js";
import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import shoppingCart from "./../../Assets/imgs/shopping-cart.png"
import axios from "axios";
import Context from "./../../Context/Context.js";
import swal from 'sweetalert';


export default function Home(){
    const {token} = useContext(Context);
    const {setUserCart} = useContext(Context);
    const sessionToken = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const URL_Products = "http://localhost:5000/home";
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
            setItem([...item, product]);
        }
    }

    setUserCart(item);
    console.log("lista", item);
    
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

