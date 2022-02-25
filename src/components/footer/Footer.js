import React from 'react'
import { ContainerFooter, ItemMenu } from './styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <ContainerFooter>
      <Link to="/">
        <ItemMenu>
          <HomeOutlinedIcon fontSize='large' />
        </ItemMenu>
      </Link>
      <Link to="/ShoppingCart">
        <ItemMenu>
          <ShoppingCartOutlinedIcon fontSize='large' />
        </ItemMenu>
      </Link>
      <ItemMenu>
        <PersonOutlineOutlinedIcon fontSize='large' />
      </ItemMenu>
    </ContainerFooter>
  )
}