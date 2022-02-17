import React from 'react'
import {HeaderContainer} from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Header({pageName})  {
    return (
        <>
        <HeaderContainer>
            <figure>
                <ArrowBackIosIcon fontSize='small'/>
            </figure>
            <p>{pageName}</p>
        </HeaderContainer>
        </>
    )
}