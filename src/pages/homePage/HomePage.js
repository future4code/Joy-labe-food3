import React, { useContext, useMemo, useState } from "react";
import { MainContainer, ContainerCards } from "./styles";
import { CardComponent } from "./CardComponent";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import { Container } from "../restaurantsPage/styles";
import {Footer} from "../../components/footer/Footer"
import { Input, TextField } from "@material-ui/core";
import { CategoryBar } from "../../components/category/CategoryBar";
import { ContainerCategory } from "../../components/category/styles";

export default function HomePage(props) {
    const { states} = useContext(GlobalStateContext);
    const { restaurantes } = states;
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const listRestaurant = restaurantes && restaurantes.map((restaurant) => {
        return (
            <CardComponent
            key={restaurant.id}
            image={restaurant.products[4].photoUrl}
            placeName={restaurant.name}
            deliveryTime={restaurant.deliveryTime}
            deliveyValue={restaurant.shipping}
            pathName={restaurant.id}
            />
            )
        })

    const filteredRestaurant = useMemo(() => {
        if(!search) return listRestaurant;

        return listRestaurant.filter( restaurantItem => {
            return restaurantItem.props.placeName.toLowerCase().includes( search.toLowerCase() )
        })
    }, [search, listRestaurant])

    const listCategory = restaurantes && restaurantes.map((restaurant) => {
        return (
            <CategoryBar
            key={restaurant.id}
            category={restaurant.category}
            />
        )
    })
    // .filter((produto) => { 

    //     return props.classificacaoCategoria === "Todas as categorias" || produto.categoria.includes(props.classificacaoCategoria) // }) 
    // <Box component="div" sx={{ overflow: 'hidden' }}> Estouro oculto </Box> <Box component="div" sx={{ overflow: 'visible' }}> Estouro visível </Box> >

    return (
      <MainContainer>
        <Header
        pageName={"SnackTime"}
    />
            <hr/>
           
           <Container>
          <form>
          <TextField value={search} onChange={handleSearch} label="Restaurante" variant="outlined" fullWidth/>
          </form>
          <ContainerCategory>
          {listCategory}
          </ContainerCategory>
          

            {filteredRestaurant}
            </Container>
            <Footer/>
        </MainContainer>
    )
};
