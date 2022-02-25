import styled from "styled-components";

export const ContainerCategory = styled.div ` 
width: 100%;
padding: 5px;
display:flex;
flex-direction:row; 
overflow: hidden;
overflow-x: scroll;
height: 50px;
background-color: red;

`
export const ItemCategory = styled.div`
${props => props.selected && 'color: red;'}
margin: 5px;
display: flex;
margin-right: 40px;
background-color: yellow;
width: 60px;
display: inline;

`
