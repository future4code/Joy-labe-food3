import React, { useContext, useMemo, useState } from "react";
import { MainContainer, ContainerCards } from "./styles";
import { CardComponent } from "./CardComponent";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import { Container } from "../restaurantsPage/styles";
import { Footer } from "../../components/footer/Footer"
import { TextField } from "@material-ui/core";
import { CategoryBar } from "../../components/category/CategoryBar";
import { ContainerCategory } from "../../components/category/styles";
import { Toast } from "../../components/toast/Toast"

export default function HomePage(props) {
    const { states } = useContext(GlobalStateContext);
    const { restaurantes } = states;
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")

    const listCategory = restaurantes && restaurantes.map((restaurant) => {
        return (
            <CategoryBar
                key={restaurant.id}
                category={restaurant.category}
                setFilter={() => setFilter(restaurant.category)}
            />
        )
    })


    //renderização da lista completa na tela
    const listRestaurant = restaurantes && restaurantes.map((restaurant) => {
        return (
            <CardComponent
                key={restaurant.id}
                image={restaurant.products[4].photoUrl}
                placeName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                deliveyValue={restaurant.shipping}
                pathName={restaurant.id}
                category={restaurant.category}
            />
        )
    })

    //FILTRO PELO NOME DO RESTAURANTE
    //input campo de pesquisa texto
    const handleSearch = (e) => setSearch(e.target.value)

    //função de filtro pegando valor do input de texto
    const filteredRestaurant = useMemo(() => {
        if (!search) return listRestaurant;
        return listRestaurant.filter(restaurantItem => {
            return restaurantItem.props.placeName.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, listRestaurant])

    const filterCategory = useMemo(() => {
        if (!filter) return filteredRestaurant
        console.log('to aqui');
        return filteredRestaurant.filter(restaurantItem => {
            return restaurantItem.props.category === filter
        })
    }, [filter, filteredRestaurant])
    console.log('filter category', filterCategory);
    console.log();

    return (
        <MainContainer>
            <Header
                pageName={"SnackTime"}
            />
            <hr />

            <Container>
                <form>
                    <TextField value={search} onChange={handleSearch} label="Restaurante" variant="outlined" fullWidth />
                </form>
                {listCategory}
                {/* <button onClick={teste}>Fazer pedido</button> */}
                <Toast/>
                {filterCategory}
            </Container>
            <Footer />
        </MainContainer>
    )
}
