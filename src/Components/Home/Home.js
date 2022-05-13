// import axios from "axios";
// import { useEffect } from "react";
import {ContainerHome, ContainerProduct, Image, Name, Description, Category, Price, Amount} from "./style.js";
import Header from "./../Header/Header";


export default function Home(){
    return (
        <>
            <Header/>
            <ContainerHome>
                <ContainerProduct>
                    <Image>foto</Image>
                    <Name>nome</Name>
                    <Description>descrição</Description>
                    <Category>categoria</Category>
                    <Price>preço</Price>
                    <Amount>10</Amount>
                </ContainerProduct>
            </ContainerHome>
        </>
    );
}

