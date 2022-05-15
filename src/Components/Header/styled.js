import styled from "styled-components";
import { Link } from "react-router-dom";

import header from "./../../Assets/imgs/header2.png";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 20vh;
`;

export const ImgHeader = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${header});
    //background-size: cover;
    background-repeat: no-repeat;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(186, 73, 255, 0.5);
    display: flex;
    //flex-direction: column;
    align-items: center;
    //justify-content: center;
`;

export const TitleHeader = styled.div`
    width: 100%;
    //height: 100%;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Assistant', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 70px;
        line-height: 40px;
        color: #F4E0CC;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 50px;
    }
    }
`;

export const IconsHeader = styled.div`
    width: 50%;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;;
    margin-bottom: 5%;
    //padding-right: 5%;

    ion-icon {
            font-family: 'Assistant', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 40px;
            text-align: center;
            color: #F4E0CC;
    }

    @media only screen and (max-width: 600px) {
        ion-icon {
            font-size: 25px;
            margin-right: 5%;
    }
    }
`;

export const IconDisplayCart = styled.div`
    width: 10%;
    height: 10%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;

    p {
        background-color: #F4E0CC;
        padding: 10%;
        display: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #E8833A;
        text-align: center;
    }

    span:hover + p, span:active + p, span:focus + p{
        display: block;
    }

    @media only screen and (max-width: 600px) {
        width: 8%;
        height: 8%;
        p {
            padding: 5%;
            font-size: 14px;
    }
    }
`;

export const IconDisplayUser = styled(Link)`
    width: 10%;
    height: 10%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    p {
        background-color: #F4E0CC;
        padding: 10%;
        display: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #E8833A;
        text-align: center;
    }

    span:hover + p, span:active + p, span:focus + p {
        display: block;
    }

    @media only screen and (max-width: 600px) {
        width: 8%;
        height: 8%;
        p {
            padding: 5%;
            font-size: 14px;
    }
    }
`;

export const IconDisplayExit = styled(Link)`
width: 10%;
height: 10%;
display: flex;
cursor: pointer;
flex-direction: column;
align-items: center;
text-decoration: none;

p {
    background-color: #F4E0CC;
    padding: 10%;
    display: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #E8833A;
    text-align: center;
}

span:hover + p, span:active + p, span:focus + p {
    display: block;
}

@media only screen and (max-width: 600px) {
    width: 8%;
    height: 8%;
    p {
        padding: 5%;
        font-size: 14px;
}
}
`;