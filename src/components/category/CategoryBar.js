import { AppBar, Container, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { ContainerCategory, ItemCategory } from './styles'

export const CategoryBar = (props) => {
  return(
    <ContainerCategory>
          <ItemCategory type="button" onClick={props.setFilter}>
            {props.category}
          </ItemCategory>
    </ContainerCategory>)
}


{/* <ItemCategory 
        onClick={props.onClick} 
        value={props.value}> {props.category}</ItemCategory> */}