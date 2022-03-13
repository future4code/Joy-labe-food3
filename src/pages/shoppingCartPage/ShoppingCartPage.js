import React, { useEffect, useState, useContext }  from "react";
import Header from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer";
import axios from "axios";
import { base_URL } from "../../constants/URL"
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import styled from "./styles";
import { RestaurantCard } from "../restaurantsPage/RestaurantCard";
import { Card, RestaurantInfo } from "../restaurantsPage/styles";

export default function ShoppingCartPage(props){
    const { states} = useContext(GlobalStateContext);
    const { restaurantes, restaurantDetail } = states;

    const { cartItems, cart} = useContext(GlobalStateContext);
    const { id } = useParams();

    const totalPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0);
    // console.log("SUBTOTAL:", Number.totalPrice)
    // console.log("TIPO:", typeof(totalPrice), totalPrice)
    console.log("CARRINHO:", cart)
  
    return(
        <div>
            <Header
                pageName={"Meu carrinho"}
            />
            <br/>
            <br/>
            <br/>
            <p>{cart.products?.length === 0 && <div> Carrinho vazio </div>}</p>
            <h3>Endereço de entrega</h3>
            

            {cart.products?.map((product) => (
            <> 
                <RestaurantCard key={product.id} 
                            name={product.name}
                            description={product.description}
                            photo={product.photoUrl}
                            price={Number(product.price)}/>
                
                {/* <div>
                    <p>
                        quantidade:
                        {product.qty} 
                    </p>
                </div> */}
                
            </>
            ))}

            <>
                <hr></hr>
                <div>SubTotal</div>
                <div>R$ {totalPrice}  </div>
            </>
            <Footer/>
        </div>
    )
};