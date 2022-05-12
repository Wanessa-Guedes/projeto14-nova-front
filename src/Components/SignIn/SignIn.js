import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router';

import { FormularioCompra, Main, StyledLink, Button} from "./styled.js";
import Context from "../../Context/Context.js";

function SignIn(){

    const [userLoginInfo, setUserLoginInfo] = useState({ email: "", password: ""});
    const {token, setToken} = useContext(Context);
    const {userName, setUserName} = useContext(Context);
    const navigate = useNavigate();
    console.log(token);
    console.log(userName);

    async function postLogin (e) {
        e.preventDefault();
        try {
                const data = { 
                email: userLoginInfo.email, 
                password: userLoginInfo.password};
                const promise = await axios.post("http://localhost:5000/signin", data);
                    setUserName(promise.data.name);
                    setToken(promise.data.token);
                    navigate("/home"); //TODO: tem que ver qual página que vai redirecionar
                    //TODO: Pensando: depois que a pessoa logar passar para uma url do tipo path='/home/:name'
        } catch (e) {
            alert(e.response.data);
            setUserLoginInfo({email: "", password: ""});
        }
    } 

    function montarFormularioLogin(){
        return (
            <>
                <input type="email" id="email" value={userLoginInfo.email} placeholder="E-mail" required
                    onChange={(e) => setUserLoginInfo({ ...userLoginInfo, email: e.target.value })} />
                
                <input type="password" id="password" value={userLoginInfo.password} placeholder="Senha" required
                    onChange={(e) => setUserLoginInfo({ ...userLoginInfo, password: e.target.value })} />

                <div>
                    <Button type="submit">Entrar</Button>
                </div>
            </>
        )
    }

    const formularioLogin = montarFormularioLogin();

    return (
        <>
            <Main>
            <FormularioCompra onSubmit={postLogin}>
                    {formularioLogin}
            </FormularioCompra>
            <StyledLink to="/signup"> Primeira vez? Cadastre-se! </StyledLink>
            </Main>
        </>

    )
}

export default SignIn;