import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerItemProfile, ContainerOrderHistory, IconProfile, ItemProfile, TitleRestaurant } from './styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

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