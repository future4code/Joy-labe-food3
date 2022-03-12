import styled from "styled-components";
import { primaryColor, neutralColor } from '../../constants/colors';

export const ItemProfile = styled.div ` 
width: 80%;
height: 100px;
display:flex ;
justify-content: space-around;
flex-direction: column;
padding: 5px;
font-weight: bold;
`
export const ContainerItemProfile = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;

`

export const IconProfile = styled.div`
width: 10%;
display: flex;
justify-content: center;
align-items: start;
height: 100px ;
padding-top: 10px;
`
export const ContainerOrderHistory = styled(ContainerItemProfile)` 
border: 2px solid rgba(0,0,0,25%);
width: 90% ;
border-radius: 10px;
margin: 10px;
`

export const TitleRestaurant = styled.p  ` 
color: ${primaryColor}
`