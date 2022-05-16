import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { TailSpin } from  'react-loader-spinner';

import { FormularioCompra, Main, StyledLink, Button, PageFooter, PaymentWay, SafeSite,
            IconStyle, IconHub, Loading} from "./styled.js";
import githubLink from "./../../Assets/imgs/icons8-github.gif";
import Context from "../../Context/Context.js";

function SignIn(){

    const [userLoginInfo, setUserLoginInfo] = useState({ email: "", password: ""});
    const [load, setLoad] = useState(false);
    const {setToken} = useContext(Context); //token
    const {setUserName} = useContext(Context); //userName
    const navigate = useNavigate();
    //console.log(token);
    //console.log(userName);

    async function postLogin (e) {
        e.preventDefault();
        setLoad(true);
        try {
                const data = { 
                email: userLoginInfo.email, 
                password: userLoginInfo.password};
                const promise = await axios.post("http://localhost:8000/signin", data);
                    setUserName(promise.data.name);
                    setToken(promise.data.token);

                    localStorage.setItem("token", `${promise.data.token}`);
                    localStorage.setItem("name", `${promise.data.name}`);
                    navigate("/");
                    setLoad(false); //TODO: tem que ver qual página que vai redirecionar
                                    //TODO: Pensando: depois que a pessoa logar passar para uma url do tipo path='/home/:name'
        } catch (e) {
            swal(`${e.response.data}`, "", "error");
            //alert(e.response.data);
            setUserLoginInfo({email: "", password: ""});
            setLoad(false);
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
            {
            (!load)?(
            <Main>
            <FormularioCompra onSubmit={postLogin}>
                    {formularioLogin}
            </FormularioCompra>
            <StyledLink to="/signup"> Primeira vez? Cadastre-se! </StyledLink>
            </Main>) : (
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

    )
}

export default SignIn;