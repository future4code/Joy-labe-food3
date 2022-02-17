import React from 'react'
import { CardRestaurant, ImageRestaurant, InfoRestaurant, NameRestaurant, Info } from './styles'

export const CardComponent = (props) => {
  return (
    <CardRestaurant>
      <ImageRestaurant
      src={props.source}/>
      <NameRestaurant>{props.placeName}</NameRestaurant>
      <InfoRestaurant>
        <Info>{props.deliveryTime}</Info>
        <Info>{props.deliveyValue}</Info>
      </InfoRestaurant>

    </CardRestaurant>
  )
}
