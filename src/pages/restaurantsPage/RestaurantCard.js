import React from 'react'
import { Card, InfoCard, Price } from './styles'

export const RestaurantCard = (props) => {
    return (
        <Card>
            <img src="" alt="foto do lanche" />
            <InfoCard>
                <h4 className='greenTitle'>Nome do Lanche</h4>
                <p>desc. do lanche</p>
                
                <Price>
                    <h4>R$00,00</h4>
                    <button>Adicionar</button>
                </Price>
            </InfoCard>

        </Card>
    )
}