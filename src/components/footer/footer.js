import React from 'react'
import {ContainerFooter, ItemMenu} from './styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export const Footer = () => {
  return (
    <ContainerFooter>
      <ItemMenu><HomeOutlinedIcon fontSize='large'/></ItemMenu>
      <ItemMenu><ShoppingCartOutlinedIcon fontSize='large'/></ItemMenu>
      <ItemMenu><PersonOutlineOutlinedIcon fontSize='large'/></ItemMenu>
    </ContainerFooter>
  )
}