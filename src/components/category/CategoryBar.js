import React from 'react'
import { ContainerCategory, ItemCategory } from './styles'

export const CategoryBar = (props) => {
  return (
    <div>
      <ItemCategory> {props.category}</ItemCategory>
    </div>

  )
}
