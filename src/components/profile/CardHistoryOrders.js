import React from 'react'
import {  ContainerOrderHistory, ItemProfile, TitleRestaurant } from './styles'

export const CardHistoryOrders= (props) => {
  return (
    <ContainerOrderHistory>
      <ItemProfile>
        <TitleRestaurant>Nome Restaurante</TitleRestaurant>
        <p>Data do pedido</p>
        <p>SUBTOTAL r$ 45,00</p>
      </ItemProfile>

    </ContainerOrderHistory>

  )
}