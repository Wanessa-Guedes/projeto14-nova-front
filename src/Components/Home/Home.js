import { ContainerHome, ContainerProduct, Photo, Name, Description, Price, Icon, Itens } from "./style.js";
import { useEffect, useState } from "react";
import shoppingCart from "./../../Assets/imgs/shopping-cart.png"
import axios from "axios";

export default function Home(){
    const [products, setProducts] = useState([]);
    const [shopItem, setShopItem] = useState([]);

    useEffect(() => {
        const URL_Products = "http://localhost:8000/home";
        const request = axios.get(URL_Products);
        request.then(response => setProducts(response.data));
        request.catch(erro => console.log("erro ao buscar produtos", erro));
    }, []);

    function buyItem (product){
        setShopItem([...shopItem, product]);
        console.log("lista", shopItem)
        const URL_Cart = "http://localhost:8000/cart";
        const request = axios.post(URL_Cart, shopItem);
        request.then((response) => console.log("item adicionado ao carrinho", response));
        request.catch((erro) => console.log("erro ao adicionar produto", erro));
    }
    

    return (

        <>
            <ContainerHome>

                {products.map((product, i) => 
                    <ContainerProduct key={i} id={product._id} category={product.category}>
                        <Photo src={product.image} alt={product.name}/>
                        <Name>{product.name}</Name>
                        <Description>{product.description}</Description>
                        <Itens>
                            <Price>R$ {product.price}</Price>
                            <Icon src={shoppingCart} alt="adicionar ao carrinho" onClick={buyItem}/>
                        </Itens>
                    </ContainerProduct> 
                )}        
            </ContainerHome>
        </>
    );
}

