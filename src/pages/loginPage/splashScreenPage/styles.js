import styled from "styled-components";

export const ContainerSplash = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 242px 101px;
position: relative;
width: 100vw;
height: 100%;

background: #141414;
`


export const ContainerTitle1Splash = styled.p`
    width: 117px;
height: 84px;
left: calc(50% - 117px/2);
top: calc(50% - 84px/2);

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 42px;

color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;

`

export const ContainerTitle2Splash = styled.p`
 position: static;
width: 117px;
height: 84px;
left: calc(50% - 117px/2);
top: calc(50% - 84px/2);

font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 42px;

color: #5CB646;

`