// import styled from "styled-components";
// import axios from "axios";
// import { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';

// function ConfirmantionPage(){

//     //const {token, setToken} = useContext(Context);
//     //const {userName, setUserName} = useContext(Context);
//     //const [address, setAddress] = useState("");
//     const [userAddressInfo, setUserAddressInfo] = useState({ cep: "", 
//     street: "", 
//     number:"",
//     complement: "",
//     district: "", 
//     city: "", 
//     state: "",}); // ai manda essa info pro cart....
//     const navigate = useNavigate();

//     useEffect(() => {
//         const promise = axios.get("http://localhost:5000/confirmationpage", {
//             headers: {"Authorization": `Bearer ${token}`}
//         });
//         promise.then(res => {
//             if(res.data.length > 0){
//                 setUserAddressInfo(res.data)}});
//         promise.catch(e => {alert(e.response.data)
//                                     navigate("/home")}); // Ver certinho
//     }, [token]);

//     async function searchCEP (e) {
//         e.preventDefault();
//         try {
            
//             if(userRegisterInfo.cep.length === 8){
//                 console.log(userRegisterInfo.cep)
//                 const promise = await axios.get(`http://viacep.com.br/ws/${userAddressInfo.cep}/json/`);
//                 console.log(promise.data);
//                 setUserAddressInfo({
//                     cep: promise.data.cep,
//                     street: promise.data.logradouro,
//                     number: userAddressInfo.number,
//                     complement: userAddressInfo.complement, 
//                     district: promise.data.bairro, 
//                     city: promise.data.localidade, 
//                     state: promise.data.uf});
//             } else {
//                 alert("CEP não encontrado. Tente novamente.");
//                 setUserAddressInfo({
//                 cep: "", 
//                 street: "", 
//                 number: userAddressInfo.number,
//                 complement: userAddressInfo.complement,
//                 district: "", 
//                 city: "", 
//                 state: ""});
//             }
//         } catch (e) {
//             alert(e.response.data);
//             setUserAddressInfo({ cep: "", 
//                 street: "", 
//                 number:"",
//                 complement: "",
//                 district: "", 
//                 city: "", 
//                 state: ""});
//         }
//     };

//     function addAddress(){
//         <>                       
//                         <Search>
//                             <input className="cepStyle" type="text" id="cep" value={userAddressInfo.cep} placeholder="CEP" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, cep: e.target.value })} />
//                             <ion-icon onClick={searchCEP} name="search-circle-outline"></ion-icon>
//                         </Search>
        
//                         <input type="text" id="street" value={userAddressInfo.street} placeholder="Rua" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, street: e.target.value })} />
                        
//                         <input type="number" id="number" value={userAddressInfo.number} placeholder="Número" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, number: e.target.value })} />
        
//                         <input type="text" id="complement" value={userAddressInfo.complement} placeholder="Complemento" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, complement: e.target.value })} />
                        
//                         <input type="text" id="district" value={userAddressInfo.district} placeholder="Bairro" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, district: e.target.value })} />
        
//                             <input type="text" id="city" value={userAddressInfo.city} placeholder="Cidade" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, city: e.target.value })} />
        
//                             <input type="text" id="state" value={userAddressInfo.state} placeholder="Estado" required
//                             onChange={(e) => setUserAddressInfo({ ...userAddressInfo, state: e.target.value })} />
//                         <div>
//                             <Button type="submit">Atualizar endereço</Button>
//                         </div>
//                     </>
//     }

//     function deliveryAddress(){
//         return ( 
//                 (address.length != 0) ? (
//                     {addAddress} 
//                 ) : (<p> Carregando...</p>)
//         )};


// //const formularioSignIn = montarFormularioSignIn();
// const delivery = deliveryAddress();
//     return (
// /*         <>
//             <Main>
//             <FormularioCompra onSubmit={putRegister}>
//                     {formularioSignIn}
//             </FormularioCompra>
//             </Main>
//         </> */
//         <>
//             {delivery}
//         </>

//     )

// }

// export default ConfirmantionPage;