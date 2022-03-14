import React, { useEffect, useState, useContext }  from "react";
import Header from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer";
import axios from "axios";
import { base_URL } from "../../constants/URL"
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import {EmptyCart, Container, BtnCart, TotalPrice, SubTotal, Profile, ContainerProfile, Label} from "./styles";
import { RestaurantCard } from "../restaurantsPage/RestaurantCard";
import { Card, RestaurantInfo } from "../restaurantsPage/styles";
import { getToken } from "../../helpers/localStorage";
import { setToken } from "../../helpers/localStorage";
import { CardPersonalData } from "../../components/profile/CardPersonalData";
import { CardAddressData } from "../../components/profile/CardAddressData";
import { ContainerItemProfile, ItemProfile } from "../../components/profile/styles";


export default function ShoppingCartPage(props){
    const { states, onAdd} = useContext(GlobalStateContext);
    const { restaurantes, restaurantDetail } = states;
    const [selectedRestaurantProducts, setSelectedRestaurantProducts] = useState([]);
    const [infoProfile, setInfoProfile] = useState({})


    const { cartItems, cart} = useContext(GlobalStateContext);
    const { id } = useParams();

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    
    // console.log("SUBTOTAL:", Number.totalPrice)
    // console.log("TIPO:", typeof(totalPrice), totalPrice)
    // console.log("CARRINHO:", cart)

    
    // const onAdd = () => {
    //     const auth = getToken()
    //     axios.post(`${base_URL}restaurants/${id}/order`, {
    //         headers: {
    //             auth: auth
    //         }
    //     })
        
    //         .then(({ data }) => {

    //             console.log("TESTE:", data)
    //         })

    //         .catch((err) => { console.log(err) })

    // }

    useEffect(() => {
        const auth = getToken()
        axios.get(`${base_URL}profile`, {
          headers: {
            auth: auth
          }
        })
          .then((res) => {
            setInfoProfile(res.data.user)
          })
          .catch((err) => console.log(err))
      }, [])
    
    

      console.log("CARRINHO:", cartItems)
    return(
        <div>
            <Header
                pageName={"Meu carrinho"}
            />
            <br/>
            <br/>
            <br/>
            {/* <CardAddressData
                address={infoProfile?.address}
            /> */}
            <ContainerProfile>
                <Profile>
                <p>Endereço de entrega</p>
                <p>{infoProfile?.address}</p>
                </Profile>
            </ContainerProfile>
            <Container>
                {cartItems.length === 0 && <p> Carrinho vazio </p>

                }
            </Container>
            

            {/* TESTE */}
            {/* <RestaurantInfo key={props.id}
                                    id={props.id}
                                    name={props.name}
                                    delivery={props.deliveryTime}
                                    shipping={props.shipping}
                                >
                        
                            <h1 className="greenTitle">{props.name}</h1>
                            <div>
                                <p>{props.deliveryTime} min</p>
                                <p className="space">Frete R$ {props.shipping},00</p>
                            </div>
                            <p>{props.address}</p>
                        </RestaurantInfo> */}


            {/*  */}
            {restaurantes && restaurantes?.map((restaurant) => {
                if (id === restaurant.id){

                return (<RestaurantInfo key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    delivery={restaurant.deliveryTime}
                    shipping={restaurant.shipping}
                    >
        
                        <h1 className="greenTitle">{restaurant.name}</h1>
                        <div>
                            <p>{restaurant.deliveryTime} min</p>
                            <p className="space">Frete R$ {restaurant.shipping},00</p>
                        </div>
                        <p>{restaurant.address}</p>
                    </RestaurantInfo>)
                }
            })}
            {cartItems.map((product) => (
            <>
                
                <RestaurantCard key={product.id} 
                            name={product.name}
                            description={product.description}
                            photo={product.photoUrl}
                            handler={product.handler = "Remover" }
                            price={Number(product.price).toFixed(1)}
                            />
                            
                
                
            </>
            ))}

            

            <>
                <p>Forma de pagamento</p>
                <hr></hr>
                <div>
                    <input type="radio" id="dinheiro" name="drone" value="dinheiro"
                            checked/>
                    <Label for="dinheiro">Dinheiro</Label>
                </div>

                    <div>
                    <input type="radio" id="cartao" name="drone" value="cartao"/>
                    <Label for="cartao">Cartão de crédito</Label>
                    </div>

                <SubTotal>SubTotal</SubTotal>
                <TotalPrice>R$ {totalPrice.toFixed(1)}  </TotalPrice>
                <BtnCart>Confirmar</BtnCart>
            </>
            <Footer/>
        </div>
    )
};