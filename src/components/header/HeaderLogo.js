import React from 'react'
import logo from '../../assets/Logo_black.svg'
import { LogoHeader } from './styles'


export default function HeaderLogo()  {
    return (
        <>
          <LogoHeader>
                <img alt={"Logo Snack Time"} src={logo}/>
          </LogoHeader>
        </>
    )
}