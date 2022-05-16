import styled from "styled-components";

export const ContainerHome = styled.main`
    //width: 100vw;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 20px;
    gap: 20px;
`;

export const ContainerProduct = styled.section`
    width: 200px;
    height: 300px;

    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

    padding: 10px;
`;

export const Photo = styled.img`
    width:180px;
    height:180px;

    border-radius: 10px;

    object-fit: cover;
`;

export const Name = styled.h1`
    width: 180px;
    height: 23px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #333333;
`;

export const Description = styled.h1`
    width: 180px;
    height: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;

    color: #4E4351 ;
`;

export const Itens = styled.div`
    width: 180px;
    height:20px;

    margin-top: 7px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled.img`
    width: 15px;
    height: 15px;
`;


export const Price = styled.h1`
    width: 180px;
    height: 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    
    color: #000000;
`;