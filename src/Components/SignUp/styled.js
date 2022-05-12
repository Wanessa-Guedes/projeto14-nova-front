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

