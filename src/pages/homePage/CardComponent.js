import { CardActionArea, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { Info, ContainerCards, ContainerContent } from './styles'

export const CardComponent = (props) => {

  return (
    <ContainerCards>
      <CardActionArea >
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <ContainerContent>
          <Typography align={'center'} color={'primary'} variant="h6">
            {props.placeName}
          </Typography>
        </ContainerContent>

        <ContainerContent>
          <Info>{props.deliveryTime} min</Info>
          <Info>Frete R${props.deliveyValue},00</Info>
        </ContainerContent>
      </CardActionArea>
    </ContainerCards>
  )
}
