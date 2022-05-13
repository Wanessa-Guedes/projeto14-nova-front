import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

import { FormularioCompra, Main, StyledLink, Button, Search } from "./styled.js";

function SignUp(){

    const [userRegisterInfo, setUserRegisterInfo] = useState({ name: "", 
    email: "", 
    cep: "", 
    street: "", 
    number:"",
    complement: "",
    district: "", 
    city: "", 
    state: "",
    password: "", 
    confirm: ""});
    const navigate = useNavigate();
    console.log(userRegisterInfo);

    async function searchCEP (e) {
        e.preventDefault();
        try {
            
            if(userRegisterInfo.cep.length === 8){
                console.log(userRegisterInfo.cep)
                const promise = await axios.get(`http://viacep.com.br/ws/${userRegisterInfo.cep}/json/`);
                console.log(promise.data);
                setUserRegisterInfo({
                    name: userRegisterInfo.name, 
                    email: userRegisterInfo.email, 
                    cep: promise.data.cep,
                    street: promise.data.logradouro,
                    number: userRegisterInfo.number,
                    complement: userRegisterInfo.complement, 
                    district: promise.data.bairro, 
                    city: promise.data.localidade, 
                    state: promise.data.uf,
                    password: userRegisterInfo.password, 
                    confirm: userRegisterInfo.confirm});
            } else {
                swal("CEP digitado incorretamente.", "", "info");
                setUserRegisterInfo({
                name: userRegisterInfo.name, 
                email: userRegisterInfo.email,
                cep: "", 
                street: "", 
                number: userRegisterInfo.number,
                complement: userRegisterInfo.complement,
                district: "", 
                city: "", 
                state: "",
                password: userRegisterInfo.password, 
                confirm: userRegisterInfo.confirm});
            }
        } catch (e) {
            swal("CEP não encontrado. Tente novamente.", "", "error");
            setUserRegisterInfo({ name: "", 
                email: "", 
                cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: "",
                password: "", 
                confirm: ""});
        }
    } 

    async function postRegister (e) {
        e.preventDefault();
        try {
            
            if(userRegisterInfo.password === userRegisterInfo.confirm){
                const data = { 
                name: userRegisterInfo.name, 
                email: userRegisterInfo.email, 
                cep: userRegisterInfo.cep, 
                street: userRegisterInfo.street, 
                number: userRegisterInfo.number,
                complement: userRegisterInfo.complement,
                district: userRegisterInfo.district, 
                city: userRegisterInfo.city, 
                state: userRegisterInfo.state,
                password: userRegisterInfo.password, 
                confirm: userRegisterInfo.confirm
                };
                console.log(data);
                await axios.post("http://localhost:5000/signup", data);
                    navigate("/signin");
                    swal("Dados cadastrados com sucesso!","","success");
            } else {
                swal("As senhas não são iguais! Tente novamente.", "", "error");
                //alert("As senhas não são iguais! Tente novamente.");
                setUserRegisterInfo({
                    name: userRegisterInfo.name, 
                    email: userRegisterInfo.email, 
                    cep: userRegisterInfo.cep,
                    street: userRegisterInfo.logradouro,
                    number: userRegisterInfo.number,
                    complement: userRegisterInfo.complement, 
                    district: userRegisterInfo.bairro, 
                    city: userRegisterInfo.localidade, 
                    state: userRegisterInfo.uf,
                    password: "", 
                    confirm: ""});
            }
        } catch (e) {
            swal(`${e.response.data}`,"","error");
            //alert(e.response.data);
            setUserRegisterInfo({ name: "", 
                email: "", 
                cep: "", 
                street: "", 
                number:"",
                complement: "",
                district: "", 
                city: "", 
                state: "",
                password: "", 
                confirm: ""});
        }
    } 

    function montarFormularioSignIn(){
        return (
            <>
                <input type="text" id="name" value={userRegisterInfo.name} placeholder="Nome" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, name: e.target.value })} />

                <input type="email" id="email" value={userRegisterInfo.email} placeholder="E-mail" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, email: e.target.value })} />
                
                <Search>
                    <input className="cepStyle" type="text" id="cep" value={userRegisterInfo.cep} placeholder="CEP" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, cep: e.target.value })} />
                    <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                </Search>

                <input type="text" id="street" value={userRegisterInfo.street} placeholder="Rua" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, street: e.target.value })} />
                
                <input type="number" id="number" value={userRegisterInfo.number} placeholder="Número" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, number: e.target.value })} />

                <input type="text" id="complement" value={userRegisterInfo.complement} placeholder="Complemento" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, complement: e.target.value })} />
                
                <input type="text" id="district" value={userRegisterInfo.district} placeholder="Bairro" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, district: e.target.value })} />

                    <input type="text" id="city" value={userRegisterInfo.city} placeholder="Cidade" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, city: e.target.value })} />

                    <input type="text" id="state" value={userRegisterInfo.state} placeholder="Estado" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, state: e.target.value })} />

                <input type="password" id="password" value={userRegisterInfo.password} placeholder="Senha" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, password: e.target.value })} />

                <input type="password" id="confirm" value={userRegisterInfo.confirm} placeholder="Confirme a senha" required
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, confirm: e.target.value })} />

                <div>
                    <Button type="submit">Cadastrar</Button>
                </div>
            </>
        )
    }

    const formularioSignIn = montarFormularioSignIn();

    return (
        <>
            <Main>
            <FormularioCompra onSubmit={postRegister}>
                    {formularioSignIn}
            </FormularioCompra>
            <StyledLink to="/signin"> Já tem uma conta? Entre agora! </StyledLink>
            </Main>
        </>

    )
}

export default SignUp;