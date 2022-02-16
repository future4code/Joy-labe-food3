import styled from "styled-components";
import React from "react";

export const MainContainer = styled.div` 
width: 100vw;
height: 100vh;
`

export const ContainerCards = styled.div ` 
display: flex;
flex-direction: column;
row-gap: 10px;
align-items: center;
margin-top: 20px;
`
export const CardRestaurant = styled.div `
width: 90%;
height: 200px;
border: solid 1px black;
border-radius: 10px;

`
export const Title = styled.div`
background-color: white;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
`
export const ImageRestaurant = styled.img` 
height:65%;
background-color: pink;
width: 100%;
border-radius: border: 5px solid #1C6EA4;
border-radius: 10px 10px 0px 0px;
`

export const NameRestaurant = styled.p`
color: green;
padding: 5px;
font-weight: bold;
`

export const InfoRestaurant = styled.div ` 
display: flex;
justify-content: space-between;
`
export const Info = styled.p` 
color: gray;
padding: 5px
`
// export default function StyledHomePage() {
//   return (
//     <div>
//       <MainContainer />
//     </div>
//   )
// }