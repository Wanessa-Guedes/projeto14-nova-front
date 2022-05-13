import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

import Context from "../../Context/Context";
import { FormularioCompra, Main, StyledLink, Button, Search } from "./styled.js";

function ConfirmantionPage(){

    const {token, setToken} = useContext(Context);
    const {userName, setUserName} = useContext(Context);
    //const [address, setAddress] = useState("");
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
    cpfTitular: "",});
    const navigate = useNavigate();
    console.log(userBuyerInfo)
    useEffect(() => {
        const promise = axios.get("http://localhost:5000/confirmationpage", {
            headers: {"Authorization": `Bearer ${token}`}
        });
        promise.then(res => {
                console.log(res.data);
                setUserAddressInfo(res.data)
                setUserBuyerInfo(res.data)});
        promise.catch(e => {alert(e.response.data)
                                    navigate("/home")}); // Ver certinho
    }, [token]);

    async function searchCEP (e) {
        e.preventDefault();
        try {
            
            if(userAddressInfo.cep.length === 8){
                console.log(userAddressInfo.cep)
                const promise = await axios.get(`http://viacep.com.br/ws/${userAddressInfo.cep}/json/`);
                console.log(promise.data);
                setUserAddressInfo({
                    cep: promise.data.cep,
                    street: promise.data.logradouro,
                    number: userAddressInfo.number,
                    complement: userAddressInfo.complement, 
                    district: promise.data.bairro, 
                    city: promise.data.localidade, 
                    state: promise.data.uf});
            } else {
                alert("CEP não encontrado. Tente novamente.");
                setUserAddressInfo({
                cep: "", 
                street: "", 
                number: "",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
            }
        } catch (e) {
            alert(e.response.data);
            setUserAddressInfo({ cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: ""});
        }
    };

    function addAddress(){
        return (
        <>                       
                        <Search>
                            <input className="cepStyle" type="text" id="cep" value={userAddressInfo.cep} placeholder="CEP" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, cep: e.target.value })} />
                            <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                        </Search>
        
                        <input type="text" id="street" value={userAddressInfo.street} placeholder="Rua" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, street: e.target.value })} />
                        
                        <input type="number" id="number" value={userAddressInfo.number} placeholder="Número" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, number: e.target.value })} />
        
                        <input type="text" id="complement" value={userAddressInfo.complement} placeholder="Complemento" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, complement: e.target.value })} />
                        
                        <input type="text" id="district" value={userAddressInfo.district} placeholder="Bairro" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, district: e.target.value })} />
        
                            <input type="text" id="city" value={userAddressInfo.city} placeholder="Cidade" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, city: e.target.value })} />
        
                            <input type="text" id="state" value={userAddressInfo.state} placeholder="Estado" required
                            onChange={(e) => setUserAddressInfo({ ...userAddressInfo, state: e.target.value })} />
                    </>
        )}

        function infosBuyer(){
            return (
            <>                       
                                <input className="name" type="text" id="name" value={userBuyerInfo.name} placeholder="Nome" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, name: e.target.value })} />
            
                            <input type="text" id="email" value={userBuyerInfo.email} placeholder="E-mail" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, email: e.target.value })} />
                            
                            <input type="number" id="creditcard" value={userBuyerInfo.creditcard} placeholder="Cartão de crédito" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, creditcard: e.target.value })} />
            
                            <input type="number" id="cvv" value={userBuyerInfo.cvv} placeholder="CVV" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, cvv: e.target.value })} />
                            
                            <input type="number" id="validate" value={userBuyerInfo.validate} placeholder="Validade" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, validate: e.target.value })} />
            
                                <input type="text" id="nameTitular" value={userBuyerInfo.nameTitular} placeholder="Nome do titular" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, nameTitular: e.target.value })} />
            
                                <input type="cpf" id="cpfTitular" value={userBuyerInfo.cpfTitular} placeholder="CPF do titular" required
                                onChange={(e) => setUserBuyerInfo({ ...userBuyerInfo, cpfTitular: e.target.value })} />
                        </>
            )}


//const formularioSignIn = montarFormularioSignIn();
const delivery = addAddress();
const infoBuyer = infosBuyer();
    return (
        <>
        {
                <Main>
                    <p>Olá, {userName}</p>
                <FormularioCompra>
                <p>Endereço de entrega.</p>
                            {delivery}
                </FormularioCompra>

                <FormularioCompra>
                <p>Dados do comprador.</p>
                            {infoBuyer}
                </FormularioCompra>
                </Main>


        }
        </> 
    )

}

export default ConfirmantionPage;