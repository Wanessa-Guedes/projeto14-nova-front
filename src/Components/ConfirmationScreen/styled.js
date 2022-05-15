import styled from "styled-components";
import { Link } from "react-router-dom";


export const ContainAll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    flex: 1 1 400px;
    input {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000; 
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 5px;
        width: 90%;
    }

    p {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 50px;
        color: #00000;
    }
`;

export const Main = styled.main`
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    //height: 50vw;
    h1 {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
    }

    @media only screen and (max-device-width: 900px) {
        height: 50vh;
    }

    @media only screen and (max-device-width: 375px) {
        height: 70vh;
    }

    @media only screen and (device-height: 720px) {
        height: 70vh;
    }
` ;

export const StyledLink = styled(Link)`
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #D795E6;
        text-decoration: none;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ion-icon {
        //background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 23px;
        color: #000000;
        padding-left: 2%;
    }

    .cepStyle {
        width: 90%;
    }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-family: 'Assistant', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        color: #00000; 
    }
`;

export const CreditCardInfo = styled.div`
    display: flex;
    flex-align: column;

    .creditCardNumber {
        width: 50%;
    }

    input {
        width: 20%;
    }
`;

export const AddressInfo = styled.div`
    display: flex;
    flex-align: column;

    .streetName {
        width: 50%;
    }

    input {
        width: 20%;
    }
`;

export const MainOrder = styled.main `
    display: flex;
    //flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    //width: 88%;
    //background-color: #FFFFFF;
    //border-radius: 5px;
    margin-left: 2%;
    //max-width: 60%;
    max-width: 90%;

    img {
        width: 80px;
        border-radius: 5px;
    }
`;

export const InfosPedidos = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    align-items: flex-start;
    //width: 20%;
    //min-width: 200px;
    margin-right: 5%
`;

export const ContainerOrder = styled.div`
    display: flex;
    //flex-direction: column;
    flex: 1 1 200px;
    align-items: center;
    padding: 1%; 
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    //width: 20%;
    margin-left: 5%;
    margin-bottom: 1%;
    max-width: 200px;
    
    p {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #00000;
    }

    @media only screen and (max-device-width: 952px) {
        margin-left: 20%;
    }

    @media only screen and (max-device-width: 1176px and max-device-width: 953px) {
        margin-left: 15%;
    }
`;

export const OrderTitle = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        //align-items: center;
        align-items: flex-start;

        h3 {
            font-family: 'Roboto', sans-serif;;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 50px;
            color: #00000;
            margin-left: 2%;
        }
`;

export const OrderData = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 20vh;
`;

export const Footer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #00000;
        background-color: #FFFFFF;
        width: 50%;
        padding: 1%;
        border-radius: 5px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
`;

export const Button = styled.button`
    background: #D795E6;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    width: 30%;
    cursor: pointer;
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const PageFooter = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #C294C2;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #F4E0CC;
        //text-align: center;
        padding: 0.1%;
    }

    ion-icon {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 15px;
        color: #F4E0CC;
        padding: 1%;
    }
`;

export const SafeSite = styled.div`
    display: flex;
`;

export const IconHub = styled.img`
    width: 20%;
    border-radius: 5px;
`;

export const IconStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 12px;
    }
`;

export const PaymentWay = styled.div`
    display: flex;
`;

