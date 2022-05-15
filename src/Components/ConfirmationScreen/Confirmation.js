import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { TailSpin } from  'react-loader-spinner';

import Context from "../../Context/Context";
import { FormularioCompra, Main, Button, Search, Loading, Container, 
        CreditCardInfo, AddressInfo, MainOrder, InfosPedidos, ContainerOrder, OrderTitle,
        OrderData, ContainAll, Footer, PageFooter, SafeSite, IconHub, IconStyle, PaymentWay} from "./styled.js";
import githubLink from "./../../Assets/imgs/icons8-github.gif";

function ConfirmantionPage(){

    const {token, setToken} = useContext(Context);
    const {userName, setUserName} = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userAddressInfo, setUserAddressInfo] = useState({ cep: "", 
    street: "", 
    number:"",
    complement: "",
    district: "", 
    city: "", 
    state: "",}); // ai manda essa info pro cart....
    const [userBuyerInfo, setUserBuyerInfo] = useState({ name: "", 
    email: "", 
    creditcard:"",
    cvv: "",
    validate: "", 
    nameTitular: "", 
    cpfTitular: ""});
    const [loadCEP, setLoadCEP] = useState(false);
    const sessionToken = localStorage.getItem("token");
    const sessionName = localStorage.getItem("name");
    const navigate = useNavigate();

    // teste layout pedidos para finalizar a compra
    // O amount tem que vir da quantidade que a pessoa comprou no carrinho
    const pedidos = [{
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
}];

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

//console.log(order);

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/confirmationpage", {
            headers: {"Authorization": `Bearer ${sessionToken}`}
        });
        promise.then(res => {
                //console.log(res.data);
                setUserAddressInfo(res.data)
                setUserBuyerInfo(res.data)
                setOrder(res.data)
                setLoad(false)});
        promise.catch(e => {swal(`${e.response.data}`, "", "error")
                                    navigate("/")}); // Ver certinho
    }, [sessionToken]);

    async function searchCEP (e) {
        e.preventDefault();
        setLoadCEP(true);
        try {
            
            if(userAddressInfo.cep.length === 8){
                //console.log(userAddressInfo.cep)
                const promise = await axios.get(`http://viacep.com.br/ws/${userAddressInfo.cep}/json/`);
                //console.log(promise.data);
                setUserAddressInfo({
                    cep: promise.data.cep,
                    street: promise.data.logradouro,
                    number: "",
                    complement: "", 
                    district: promise.data.bairro, 
                    city: promise.data.localidade, 
                    state: promise.data.uf});
                    setOrder({
                        cep: promise.data.cep,
                        street: promise.data.logradouro,
                        number: "",
                        complement: "", 
                        district: promise.data.bairro, 
                        city: promise.data.localidade, 
                        state: promise.data.uf});
                    setLoadCEP(false);
            } else {
                swal("CEP não encontrado. Tente novamente.", "", "info");
                setUserAddressInfo({
                cep: "", 
                street: "", 
                number: "",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
                setOrder({
                    cep: "", 
                    street: "", 
                    number: "",
                    complement: "",
                    district: "", 
                    city: "", 
                    state: ""});
            }
        } catch (e) {
            swal(`${e.response.data}`, "", "error");
            setUserAddressInfo({ cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
                setOrder({ cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
        }
    };
    console.log(order);
    async function FinalOrder (){
        setLoad(true);
        console.log(order);
        const config = {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
        try {
            const data = {...order, pedidos};
            await axios.post("http://localhost:5000/confirmationpage", data, config);
                setLoad(false);
                swal("Pedido realizado com sucesso!", "Aguarde, dentro de alguns instantes nosso e-mail chegará", "success");
                navigate("/");
        } catch (e) {
            swal("Algo deu errado", "Por favor, confirme seus dados.", "error");
        } 
    }

    function addAddress(){
        return (
        <>               {   
                    (loadCEP)? (
                        <Search>
                            <input className="cepStyle" type="text" id="cep" value={userAddressInfo.cep} placeholder="CEP" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, cep: e.target.value })
                                                setOrder({ ...order, cep: e.target.value })}} />
                            <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                            <TailSpin
                                height="25"
                                width="25"
                                color='#D795E6'
                                ariaLabel='loading'
                            />
                        </Search> ) : (
                            <Search>
                            <input className="cepStyle" type="text" id="cep" value={userAddressInfo.cep} placeholder="CEP" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, cep: e.target.value })
                                                setOrder({ ...order, cep: e.target.value })}} />
                            <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                            </Search>
                        )
                        }
                        <AddressInfo>
                        <input className="streetName" type="text" id="street" value={userAddressInfo.street} placeholder="Rua" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, street: e.target.value })
                                                setOrder({ ...order, street: e.target.value })}} />
                        
                        <input type="number" id="number" value={userAddressInfo.number} placeholder="Número" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, number: e.target.value })
                                                setOrder({ ...order, number: e.target.value })}} />
        
                        <input type="text" id="complement" value={userAddressInfo.complement} placeholder="Complemento" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, complement: e.target.value })
                                                setOrder({ ...order, complement: e.target.value })}} />
                        </AddressInfo>
                        <input type="text" id="district" value={userAddressInfo.district} placeholder="Bairro" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, district: e.target.value })
                                                setOrder({ ...order, district: e.target.value })}} />
        
                            <input type="text" id="city" value={userAddressInfo.city} placeholder="Cidade" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, city: e.target.value })
                                                setOrder({ ...order, city: e.target.value })}} />
        
                            <input type="text" id="state" value={userAddressInfo.state} placeholder="Estado" required
                            onChange={(e) => {setUserAddressInfo({ ...userAddressInfo, state: e.target.value })
                                                setOrder({ ...order, state: e.target.value })}} />
                    </>
        )}

        function infosBuyer(){
            return (
            <>                       
                                <input className="name" type="text" id="name" value={userBuyerInfo.name} placeholder="Nome" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, name: e.target.value })
                                setOrder({ ...order, name: e.target.value })}} />
            
                            <input type="text" id="email" value={userBuyerInfo.email} placeholder="E-mail" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, email: e.target.value })
                                setOrder({ ...order, email: e.target.value })}} />
                            <CreditCardInfo>
                            <input className="creditCardNumber" type="text" id="creditcard" value={userBuyerInfo.creditcard} placeholder="Cartão de crédito" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, creditcard: e.target.value })
                                setOrder({ ...order, creditcard: e.target.value })}} />
            
                            <input type="text" id="cvv" value={userBuyerInfo.cvv} placeholder="CVV" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, cvv: e.target.value })
                                setOrder({ ...order, cvv: e.target.value })}} />
                            
                            <input type="text" id="validate" value={userBuyerInfo.validate} placeholder="Validade" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, validate: e.target.value })
                                setOrder({ ...order, validate: e.target.value })}} />
                            </CreditCardInfo>
                                <input type="text" id="nameTitular" value={userBuyerInfo.nameTitular} placeholder="Nome do titular" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, nameTitular: e.target.value })
                                setOrder({ ...order, nameTitular: e.target.value })}} />
            
                                <input type="text" id="cpfTitular" value={userBuyerInfo.cpfTitular} placeholder="CPF do titular" required
                                onChange={(e) => {setUserBuyerInfo({ ...userBuyerInfo, cpfTitular: e.target.value })
                                setOrder({ ...order, cpfTitular: e.target.value })}} />
                        </>
            )}

        function orderList () {
            return (
                <>
                {
                    pedidos.map((pedido, item) => {
                        return (
                            <ContainerOrder>  
                                <InfosPedidos>
                                <img src={pedido.image} alt="imagem de perfume"/>
                                <p>{pedido.name}</p>
                                </InfosPedidos>
                                <OrderData>
                                    <p>{pedido.description}</p>
                                    <p>{pedido.price}</p>
                                </OrderData>
                        </ContainerOrder>
                        )
                    }) 
                }
                </>
            )
        };

        function finalizeOrder(){
            //TODO: TEM QUE FAZER UM POST AQUI
            if(!userAddressInfo.cep || !userAddressInfo.street || !userAddressInfo.number || !userAddressInfo.complement || !userAddressInfo.district || !userAddressInfo.city || !userAddressInfo.state){
                swal("Ops!", "Precisamos que preencha todos os campos para entregar seu pedido", "info");
            } else if (!userBuyerInfo.name || !userBuyerInfo.email || !userBuyerInfo.creditcard || !userBuyerInfo.cvv || !userBuyerInfo.validate || !userBuyerInfo.nameTitular || !userBuyerInfo.cpfTitular) {
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
                    <p>Total da compra: R$ 1000,00</p>
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