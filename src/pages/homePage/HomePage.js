import React, { useContext, useState, useEffect } from "react";
import { MainContainer, ContainerCards } from "./styles";
import { CardComponent } from "./CardComponent";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import { Container } from "../restaurantsPage/styles";
import { Footer } from "../../components/footer/Footer"
import { TextField } from "@material-ui/core";
import { CategoryBar } from "../../components/category/CategoryBar";
import { ContainerCategory } from "../../components/category/styles";
import axios from "axios";
import { base_URL } from "../../constants/URL"

export default function HomePage(props) { // declarando variaveis de estado 
    const [search, setSearch] = useState("") //cria-se um estado chamado setSeacrh  que salva os dados da entrada de pesquisa em cada ocorrência do changeevento. 
    const [restaurantes, setRestaurantes] = useState([])  // criou a variavel que vai receber uma lista e guardar no estado
    const [selectedCategory, setSelectedCategoria] = useState('') //categorias selecionadas
    const [categorias, setCategorias] = useState([]) // opções das categorias
    const [filteredRestaurantes, setFilteredRestaurantes] = useState([]) // restaurante filtrados seja pelo texto ou categoria


//    método   recebe uma string como argumento e filtra os restaurantes 
    const handleSearch = (e) => {
        const textFilter = e.target.value // fez isso para evitar chamar e.target.value multiplas vezes
        setSearch(textFilter)
        if(!textFilter)  return setFilteredRestaurantes(restaurantes);
        
        const filteredList = restaurantes.filter( restaurantItem => {
            return restaurantItem.name.toLowerCase().includes( textFilter.toLowerCase() )
          
        })
       
     
        setFilteredRestaurantes(filteredList)
    }

    const handleSearchCategory = (categoryName) => {
        setSelectedCategoria(categoryName)
        if(categoryName === selectedCategory) return setFilteredRestaurantes(restaurantes);
   
        const filteredList = restaurantes.filter( restaurantItem => {
            return restaurantItem.category.toLowerCase().includes( categoryName.toLowerCase() )
        })
        setFilteredRestaurantes(filteredList)
    }




    
    
        const getRestaurants = () => {
            const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJjQXBxSzVCY3ZlVWxodzNBdWhhIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldnRlc3RlQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS4yMjItMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXp6eiwgMTc3OCwgNzExIC0gVmlsYSBOLiBDb25jZWnDp8Ojb28iLCJpYXQiOjE2NDUxMTgwODN9.J2c7hQS-Al-e7aEwm4gmpFXm1tf10EvNIsEhYuW-2pI"
            axios
                .get(`${base_URL}restaurants`, {
                    headers: {
                        auth: auth
                    }
                })
                .then(async (res) => {
                    const restaurantesResponse = res.data.restaurants
                    setRestaurantes(restaurantesResponse)
                    setFilteredRestaurantes(restaurantesResponse)
                    const categoriasResponse = restaurantesResponse.map((restaurant) => restaurant.category).sort()
                    setCategorias([...new Set(categoriasResponse)])
                })
                .catch((err) => console.log(err.data))
        }

    useEffect(() => {
        getRestaurants();

        //dicas para próxima página:
        // history.location.pathname
        // js split string e obter a ultima parte (o id do restaurante)
        // fazer um getRestaurant e passar o id do restaurante obtido
        // salvar dados do response num state local
    }, [])

    
    
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
            {categorias.map((categoryItem) => {
                return (
                    <CategoryBar
                    selected={categoryItem === selectedCategory}
                    action={() => handleSearchCategory(categoryItem)}
                    category={categoryItem}
                    />
                )
            })}
          </ContainerCategory>
          

          {filteredRestaurantes.length === 0 && (
                <p>Nenhum restaurante encontrado</p>
                )
            }
            
          {filteredRestaurantes.map((restaurant) => {
            return (
                <CardComponent
                key={restaurant.id}
                image={restaurant.logoUrl}
                placeName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                deliveyValue={restaurant.shipping}
                pathName={restaurant.id}
                />
                )
            })
            }
            </Container>
            <Footer />
        </MainContainer>
    )
}
