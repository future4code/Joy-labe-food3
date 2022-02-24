import React from 'react'
import { ContainerCategory, ItemCategory } from './styles'

export const CategoryBar = (props) => {
  return (
    <div>
      <ItemCategory selected={props.selected} onClick={props.action}> {props.category}</ItemCategory>
    </div>

  )
}
