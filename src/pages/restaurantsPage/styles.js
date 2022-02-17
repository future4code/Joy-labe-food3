import styled from "styled-components";
import React from "react";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

` 
export const Container = styled.div`
    margin-top:10vh;
    width: 92%;
    display: flex;
    flex-direction: column;


    h3 {
        margin-top: 2vh;
        border-bottom: 1px solid black;
    }
`
export const Card = styled.div`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 25%);
    border-radius: 8px;
    margin-top: 1vh;
    height: 15vh;
`
export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 14px 14px 14px;


    .greenTitle {
        color: rgba(92, 182, 70, 70%);
    }

    p {
        margin-top: 5px;
        font-size: 13px;
        color: rgba(0, 0, 0, 25%);
    }
`
export const Price = styled.div`
    display: flex;
    margin-top: 15px;

    h4 {
        margin-right: 129px;
    }

    button {
        align-self: flex-end;
        border: 1px solid green;
        color: green;
        height: 4.3vh;
        width: 25vw;
        background-color: rgba(255, 255, 255, 0%);
        border-radius: 10px 0 10px 0;
    }
`

