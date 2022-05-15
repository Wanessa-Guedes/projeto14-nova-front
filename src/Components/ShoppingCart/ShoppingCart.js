import { Container, ContainerCart, ContainerList, Subtitle, Title, ContainerTitle, Div, Button, ButtonDiv, Image, Name, Select, Total, FooterCart, Icon} from "./style";
import {BiTrash} from "react-icons/bi"

export default function ShoppingCart(){
    const subtitles = ["Produto", "Quantidade", "Preço", "Total", "Del" ]
    return(
        <Container>
            <ContainerTitle>
                <Title>Olá fulano! Este é o teu carrinho.</Title>
                <ContainerCart>
                    <ContainerList>
                        {subtitles.map((sub,i)=> <Subtitle key={i}>{sub}</Subtitle>)}
                    </ContainerList>
                    <ContainerList>
                        <Div>
                            <Image src="foto" alt="foto"/>
                            <Name>Perfuminho</Name>
                        </Div>
                        <Select>1</Select>
                        <Total>R$ 19,90</Total>
                        <Total>R$ 19,90</Total>
                        <Icon><BiTrash color="red" size="30"/></Icon>
                    </ContainerList>
                    <FooterCart>
                        <ButtonDiv>
                            <Button>Finalizar compra</Button>
                            <Button>Continuar comprando</Button>
                        </ButtonDiv>
                        <Total>Total: R$ 19,90</Total>
                    </FooterCart>
                </ContainerCart>
            </ContainerTitle>
        </Container>
    );
}