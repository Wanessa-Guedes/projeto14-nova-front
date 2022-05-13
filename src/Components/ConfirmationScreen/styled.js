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
    width: 30%;
    cursor: pointer;
    margin-top: 2%;
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
    width: 88%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-left: 2%;

    img {
        width: 80%;
    }
`;

export const InfosPedidos = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`;

export const ContainerOrder = styled.div`
    display: flex;
    //flex-direction: column;
    flex: 1 1 200px;
    align-items: center;
    padding: 2%; 
    
    p {
        font-family: 'Roboto', sans-serif;;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 50px;
        color: #00000;
    }
`;

export const OrderTitle = styled.div`
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

        p {
            width: 20vh;
        }
`;