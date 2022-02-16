import styled, { CardRestaurant, MainContainer, Title, ContainerCards } from "./styles";
import React from "react";
import { CardComponent } from "./CardComponent";


export default function HomePage(props) {
    return (
        <MainContainer>
            <Title>SnackTime</Title>
            <hr/>
            <ContainerCards>
                <CardComponent
                source='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'
                placeName={'Mc Donalds'}
                deliveryTime='50-60 mins'
                deliveyValue='Frete R$ 6,00'
                />
               <CardComponent
                source='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'
                placeName={'Mc Donalds'}
                deliveryTime='50-60 mins'
                deliveyValue='Frete R$ 6,00'
                /><CardComponent
                source='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'
                placeName={'Mc Donalds'}
                deliveryTime='50-60 mins'
                deliveyValue='Frete R$ 6,00'
                />
            </ContainerCards>

        </MainContainer>
    )
};