import axios from "axios";
import { useState} from "react"; //useContext
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { TailSpin } from  'react-loader-spinner';

import { FormularioCompra, Main, StyledLink, Button, Search, PageFooter, PaymentWay,
            SafeSite, IconStyle, IconHub, Loading} from "./styled.js";
import githubLink from "./../../Assets/imgs/icons8-github.gif";

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
    const [loadCEP, setLoadCEP] = useState(false);
    const [loadSendInfo, setLoadSendInfo] = useState(false);
    //console.log(userRegisterInfo);

    async function searchCEP (e) {
        e.preventDefault();
        setLoadCEP(true);
        try {

                const promise = await axios.get(`http://viacep.com.br/ws/${userRegisterInfo.cep}/json/`);
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
                    setLoadCEP(false);
        } catch (e) {
            swal(`CEP não encontrado`, "Por favor, digite novamente", "error");
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
        setLoadSendInfo(true);
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
                //console.log(data);
                await axios.post("https://project14-nova-e-commerce.herokuapp.com/signup", data);
                    navigate("/signin");
                    swal("Dados cadastrados com sucesso!","","success");
                    setLoadSendInfo(false);
            } else {
                swal("As senhas não são iguais! Tente novamente.", "", "error");
                setLoadSendInfo(false);
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
                
                {
                    (loadCEP)?(
                <Search>
                    <input className="cepStyle" type="text" id="cep" value={userRegisterInfo.cep} placeholder="CEP"
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, cep: e.target.value })} />
                    <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                    <TailSpin
                        height="25"
                        width="25"
                        color='#D795E6'
                        ariaLabel='loading'
                    />
                </Search>) : (
                    <Search>
                    <input className="cepStyle" type="text" id="cep" value={userRegisterInfo.cep} placeholder="CEP"
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, cep: e.target.value })} />
                    <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
                    </Search>
                )
                }
                <input type="text" id="street" value={userRegisterInfo.street} placeholder="Rua"
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, street: e.target.value })} />
                
                <input type="number" id="number" value={userRegisterInfo.number} placeholder="Número"
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, number: e.target.value })} />

                <input type="text" id="complement" value={userRegisterInfo.complement} placeholder="Complemento"
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, complement: e.target.value })} />
                
                <input type="text" id="district" value={userRegisterInfo.district} placeholder="Bairro" 
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, district: e.target.value })} />

                    <input type="text" id="city" value={userRegisterInfo.city} placeholder="Cidade" 
                    onChange={(e) => setUserRegisterInfo({ ...userRegisterInfo, city: e.target.value })} />

                    <input type="text" id="state" value={userRegisterInfo.state} placeholder="Estado" 
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
        {
            (!loadSendInfo)?(
            <Main>
            <FormularioCompra onSubmit={postRegister}>
                    {formularioSignIn}
            </FormularioCompra>
            <StyledLink to="/signin"> Já tem uma conta? Entre agora! </StyledLink>
            </Main>) : ( 
            
                <Loading>
                    <TailSpin
                        height="150"
                        width="150"
                        color='#D795E6'
                        ariaLabel='loading'
                    />
                </Loading>)
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

export default SignUp;