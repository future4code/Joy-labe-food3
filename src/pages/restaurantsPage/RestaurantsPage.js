import React, {useState } from "react";
import Header from "../../components/header/Header"
import { RestaurantCard } from './RestaurantCard';
import { Main, Container } from './styles'

export default function RestaurantsPage() {

    
        
       




    return(
        <Main>
            <Header
                pageName={"Restaurante"}
            />

            <Container>
            
                <h3>Principais</h3>
                <RestaurantCard></RestaurantCard>

                <h3>Acompanhamentos</h3>
                <RestaurantCard></RestaurantCard>

            </Container>
            
        </Main>
    )
}