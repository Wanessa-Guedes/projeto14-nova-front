import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
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
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 50vw;
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

    @media only screen and (max-device-width: 550px) {
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

export const Button = styled.button`
    background: #D795E6;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    width: 100%;
    cursor: pointer;
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

export const PageFooter = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #C294C2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;

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

