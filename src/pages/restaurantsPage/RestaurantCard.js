import React from 'react'
import { Card, InfoCard, Price, ImageContainer } from './styles'

export const RestaurantCard = (props) => {
    return (
        <Card>
            <ImageContainer>
                <img src={props.photo} alt="foto do lanche" />
            </ImageContainer>
            <InfoCard>
                <h2 className='greenTitle'>{props.name}</h2>
                <p>{props.description}</p>
                <Price>
                    <h6>R${props.price}0</h6>   
                    <button className='position'>Adicionar</button> 
                </Price>
            </InfoCard>
            
        </Card>
    )
}