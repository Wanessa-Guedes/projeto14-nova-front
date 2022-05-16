import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;

    display:flex;
    justify-content: center;
    align-items: center;
`;
export const ContainerTitle = styled.div`
    width: 360px;
    height: 350px; 
    //background-color: red;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-top:40px;
    padding: 15px 15px 15px 15px;

    border-radius: 20px;
    box-shadow: 2px 5px 5px 0 rgba(0, 0, 0, 0.25);

`;

export const Div = styled.div`
    width: 100%;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;


`;

export const ContainerList = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    //gap: 5px;
`;
export const Subtitle = styled.div`
    width: 110px;
    height: 25px;

    //background-color: yellow;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    color: #333333;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Image = styled.img`
    width: 20px;
    height: 20px;

    object-fit: cover;
    border-radius: 5px;
`;

export const Name = styled.p`
    width: 120px;
    //background-color: blue;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    color: #333333;

    display:flex;
    justify-content: center;
    align-items: center;
`;

export const FooterCart = styled.div`
    width: 100%;

    display:flex;
    justify-content: space-between;
    align-items: center;

`;
export const ButtonDiv = styled.div`
    width: 60%;

    display:flex;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
`;
export const Button = styled.button`
    width: 100px;
    height: 40px;

    font-size: 16px;
    text-align: center;

    border:none;
    border-radius: 5px;

    background-color:#F9F871;
    color: #4E4351;

    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export const Anchor = styled(Link)`
    width: 100px;
    height:40px;

    font-size: 16px;
    text-align:center;
    text-decoration: none;

    display:flex;
    justify-content: center;
    align-items: center;

    border:none;
    border-radius: 5px;

    background-color:#F9F871;
    color: #4E4351;
`;




