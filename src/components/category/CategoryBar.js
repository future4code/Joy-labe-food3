import { AppBar, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { ContainerCategory, ItemCategory } from './styles'

export const CategoryBar = ({button, filter}) => {
  return(
    <div>
        {button?.map((category) => {
          return(
          <button type="button" onClick={() => filter(category)}>
            {category}
          </button>)
        })}
    </div>)
}


{/* <ItemCategory 
        onClick={props.onClick} 
        value={props.value}> {props.category}</ItemCategory> */}