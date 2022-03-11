import React from "react";
import styled from "./styles";
import { ContainerSplash, ContainerTitle1Splash, ContainerTitle2Splash } from "./styles";

export default function SplashScreenPage(){
    
     setTimeout (() =>  {

           
            window.location.pathname = "/Login"
            }, 15000 )
                

        return (
            <div>
             
              
            <ContainerSplash>
            <ContainerTitle1Splash>Snack</ContainerTitle1Splash>
            <ContainerTitle2Splash>Time</ContainerTitle2Splash>
            </ContainerSplash>
            </div>
        
    )
}
;