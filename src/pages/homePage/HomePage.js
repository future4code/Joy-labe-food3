import React, { useContext } from "react";
import { MainContainer, ContainerCards } from "./styles";
import { CardComponent } from "./CardComponent";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import { Container } from "../restaurantsPage/styles";

export default function HomePage(props) {
    const { states} = useContext(GlobalStateContext);
    const { restaurantes } = states;

    const listRestaurant = restaurantes && restaurantes.map((restaurant) => {
        return (
            <CardComponent
                key={restaurant.id}
                image={restaurant.products[4].photoUrl}
                placeName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                deliveyValue={restaurant.shipping}
                />
        )
    })

    return (
      <MainContainer>
        <Header
        pageName={"SnackTime"}
    />
            <hr/>
           <Container>
            {listRestaurant}
            </Container>
        </MainContainer>
    )
};
