import { Card, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Info, ContainerCards, ContainerContent } from './styles'

const useStyles = makeStyles({
  root: {
    border: '1px',
  }
})

export const CardComponent = (props) => {
const classes = useStyles()
  return (
    <ContainerCards>
      <Card fullwidth variant="outlined">
        <Link to={`/Restaurants/${props.pathName}`}>
          <CardMedia
            component={'img'}
            alt={props.title}
            height={'150px'}
            image={props.image}
            title={props.title}
          />
        </Link>
        <ContainerContent>
          <Typography align={'center'} color={'primary'} variant="h6">
            {props.placeName}
          </Typography>
        </ContainerContent>

        <ContainerContent>
          <Info>{props.deliveryTime} min</Info>
          <Info>Frete R${props.deliveyValue},00</Info>
        </ContainerContent>
      </Card>
    </ContainerCards >
  )
}
