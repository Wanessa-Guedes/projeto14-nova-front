//import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";//, useContext
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { TailSpin } from  'react-loader-spinner';

//import Context from "../../Context/Context";
import { FormularioCompra, Main, Button, Search, Loading, Container, 
        CreditCardInfo, AddressInfo, MainOrder, InfosPedidos, ContainerOrder, OrderTitle,
        OrderData, ContainAll, Footer, PageFooter, SafeSite, IconHub, IconStyle, PaymentWay} from "./styled.js";
import githubLink from "./../../Assets/imgs/icons8-github.gif";


function ConfirmantionPage(){
    //const {token, setToken} = useContext(Context);
    //const {userName, setUserName} = useContext(Context);
    const [load, setLoad] = useState(true);
    const [loadCEP, setLoadCEP] = useState(false);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState({ cep: "", 
                                        street: "", 
                                        number:"",
                                        complement: "",
                                        district: "", 
                                        city: "", 
                                        state: "",
                                        name: "", 
                                        email: "", 
                                        creditcard:"",
                                        cvv: "",
                                        validate: "", 
                                        nameTitular: "", 
                                        cpfTitular: ""});
    const sessionToken = localStorage.getItem("token");
    const sessionName = localStorage.getItem("name");
    let totalFinal = localStorage.getItem("total");
    const navigate = useNavigate();

    // teste layout pedidos para finalizar a compra
    // O amount tem que vir da quantidade que a pessoa comprou no carrinho
    /* const pedidos = [{
        name:"Rosa Flor",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de rosas",
        amount:"5",
        price:"79,90"
    },
    {
        name: "Flowers",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de flores", 
        amount: "10",
        price: "124,50"
    },
    {
        name: "Flowers",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de flores", 
        amount: "10",
        price: "200,00"
    },
    {
        name: "Flowers",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de flores", 
        amount: "10",
        price: "200,00"
},
{
        name: "Flowers",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de flores", 
        amount: "10",
        price: "200,00"
},
{
        name: "Flowers",
        image:"https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=...",
        description: "Cheirinho de flores", 
        amount: "10",
        price: "200,00"
    }]; */

    console.log(order);

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/confirmationpage", {
            headers: {"Authorization": `Bearer ${sessionToken}`}
        });
        promise.then(res => {
                setOrder(res.data)
                setLoad(false)});
        promise.catch(e => {swal(`${e.response.data}`, "", "error")
                                    navigate("/")}); 
    }, [sessionToken]);

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/cart", {
            headers: {"Authorization": `Bearer ${sessionToken}`}
        });
        promise.then(res => {
                setProducts(res.data.cart);
                console.log(res.data.cart);
                setLoad(false)});
        promise.catch(e => {swal(`${e.response.data}`, "", "error")
                                    navigate("/")}); 
    }, [sessionToken]);


    async function searchCEP (e) {
        e.preventDefault();
        setLoadCEP(true);
        try {
            
                const promise = await axios.get(`http://viacep.com.br/ws/${order.cep}/json/`);
                    setOrder({
                        name: order.name, 
                        email: order.email, 
                        cep: promise.data.cep,
                        street: promise.data.logradouro,
                        number: "",
                        complement: "", 
                        district: promise.data.bairro, 
                        city: promise.data.localidade, 
                        state: promise.data.uf});
                    setLoadCEP(false);
        } catch (e) {
            swal(`CEP não encontrado`, "Por favor, digite novamente", "error");
                setOrder({ 
                name: order.name, 
                email: order.email,
                cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
            setLoadCEP(false);
        }
    };

    async function FinalOrder (){
        setLoad(true);

        const config = {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
        try {
            const data = {...order, products};
            await axios.post("http://localhost:5000/confirmationpage", data, config);
                setLoad(false);
                swal("Pedido realizado com sucesso!", "Aguarde, dentro de alguns instantes nosso e-mail chegará", "success");
                navigate("/");
        } catch (e) {
            swal("Algo deu errado", "Por favor, confira seus dados.", "error");
            setLoad(false);
        } 
    }

    function addAddress(){
        return (
        <>               {   
                    (loadCEP)? (
                        <Search>
                            <input className="cepStyle" type="text" id="cep" value={order.cep} placeholder="CEP" required
                            onChange={(e) => {setOrder({ ...order, cep: e.target.value })}} />
                            <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                            <TailSpin
                                height="25"
                                width="25"
                                color='#D795E6'
                                ariaLabel='loading'
                            />
                        </Search> ) : (
                            <Search>
                            <input className="cepStyle" type="text" id="cep" value={order.cep} placeholder="CEP" required
                            onChange={(e) => {setOrder({ ...order, cep: e.target.value })}} />
                            <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                            </Search>
                        )
                        }
                        <AddressInfo>
                        <input className="streetName" type="text" id="street" value={order.street} placeholder="Rua" required
                            onChange={(e) => {setOrder({ ...order, street: e.target.value })}} />
                        
                        <input type="number" id="number" value={order.number} placeholder="Número" required
                            onChange={(e) => {setOrder({ ...order, number: e.target.value })}} />
        
                        <input type="text" id="complement" value={order.complement} placeholder="Complemento" required
                            onChange={(e) => {setOrder({ ...order, complement: e.target.value })}} />
                        </AddressInfo>
                        <input type="text" id="district" value={order.district} placeholder="Bairro" required
                            onChange={(e) => {setOrder({ ...order, district: e.target.value })}} />
        
                            <input type="text" id="city" value={order.city} placeholder="Cidade" required
                            onChange={(e) => {setOrder({ ...order, city: e.target.value })}} />
        
                            <input type="text" id="state" value={order.state} placeholder="Estado" required
                            onChange={(e) => {setOrder({ ...order, state: e.target.value })}} />
                    </>
        )}

        function infosBuyer(){
            return (
            <>                       
                                <input className="name" type="text" id="name" value={order.name} placeholder="Nome" required
                                onChange={(e) => {setOrder({ ...order, name: e.target.value })}} />
            
                            <input type="text" id="email" value={order.email} placeholder="E-mail" required
                                onChange={(e) => {setOrder({ ...order, email: e.target.value })}} />
                            <CreditCardInfo>
                            <input className="creditCardNumber" type="text" id="creditcard" value={order.creditcard} placeholder="Cartão de crédito" required
                                onChange={(e) => {setOrder({ ...order, creditcard: e.target.value })}} />
            
                            <input type="text" id="cvv" value={order.cvv} placeholder="CVV" required
                                onChange={(e) => {setOrder({ ...order, cvv: e.target.value })}} />
                            
                            <input type="text" id="validate" value={order.validate} placeholder="Validade" required
                                onChange={(e) => {setOrder({ ...order, validate: e.target.value })}} />
                            </CreditCardInfo>
                                <input type="text" id="nameTitular" value={order.nameTitular} placeholder="Nome do titular" required
                                onChange={(e) => {setOrder({ ...order, nameTitular: e.target.value })}} />
            
                                <input type="text" id="cpfTitular" value={order.cpfTitular} placeholder="CPF do titular" required
                                onChange={(e) => {setOrder({ ...order, cpfTitular: e.target.value })}} />
                        </>
            )}

        function orderList () {
            return (
                <>
                {
                    products?.map((product, item) => {
                        return (
                            <ContainerOrder key={item}>  
                                <InfosPedidos>
                                <img src={product.image} alt="imagem de perfume"/>
                                <p>{product.name}</p>
                                </InfosPedidos>
                                <OrderData>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </OrderData>
                        </ContainerOrder>
                        )
                    }) 
                }
                </>
            )
        };

        function finalizeOrder(){
            //console.log(order)
            if(!order.cep || !order.street || !order.number || !order.complement || !order.district || !order.city || !order.state){
                swal("Ops!", "Precisamos que preencha todos os campos para entregar seu pedido", "info");
            } else if (!order.name || !order.email || !order.creditcard || !order.cvv || !order.validate || !order.nameTitular || !order.cpfTitular) {
                swal("Ops!", "Precisamos que preencha todos os campos para entregar seu pedido", "info");
            } else {
                {FinalOrder()}
            }
        }


//const formularioSignIn = montarFormularioSignIn();
    const delivery = addAddress();
    const infoBuyer = infosBuyer();
    const infoOrder = orderList ();
    return (
        <>
        {
            (!load) ? (
                <>
                <ContainAll>
                <Container>
                <h3>Olá, {sessionName}. Confira se está tudo certinho e modifique os dados se for preciso. Logo o pedido chegará a você.</h3>
                <Main>
                <FormularioCompra>
                <p>Endereço de entrega</p>
                            {delivery}
                </FormularioCompra>

                <FormularioCompra>
                <p>Dados do comprador</p>
                            {infoBuyer}
                </FormularioCompra>
                </Main>
                </Container>
                <OrderTitle>
                    <h3>Dados do pedido</h3>
                    <MainOrder>
                        {infoOrder}
                    </MainOrder>
                </OrderTitle>
                <Footer>
                    <p>Total da compra: R$ {totalFinal}</p>
                    <Button onClick={finalizeOrder}><h2>Finalizar pedido</h2></Button>
                </Footer>
            </ContainAll>
            <PageFooter>
                <PaymentWay>
                <p>Formas de pagamento</p>
                <ion-icon name="card-outline"></ion-icon>
                <p>Aceitamos todas as bandeiras</p>
                </PaymentWay>
                <SafeSite>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <p>Site seguro</p>
                </SafeSite>
                    <IconStyle>
                    <IconHub src={githubLink} alt="github link" />
                    <p>Wanessa-Guedes</p>
                    </IconStyle>
                    <IconStyle>
                    <IconHub src={githubLink} alt="github link" />
                    <p>geicybeatriz</p>
                    </IconStyle>
            </PageFooter>
            </>
            ) : (
                <Loading>
                    <TailSpin
                        height="150"
                        width="150"
                        color='#D795E6'
                        ariaLabel='loading'
                    />
                </Loading>
            )

        }
        </> 
    )
}

export default ConfirmantionPage;