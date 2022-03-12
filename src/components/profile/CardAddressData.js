import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerItemProfile, IconProfile, ItemProfile } from './styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export const CardAddressData= (props) => {
  return (
    <ContainerItemProfile>
      <ItemProfile>
        <p>Endereço cadastrado</p>
        <p>{props.address}</p>
      </ItemProfile>
      <Link to="AdressPageEdit">
        <IconProfile>
          <CreateOutlinedIcon />
        </IconProfile>
      </Link>
    </ContainerItemProfile>

  )
}