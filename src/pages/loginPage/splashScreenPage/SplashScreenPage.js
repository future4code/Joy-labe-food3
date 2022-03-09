import React from "react";
import styled from "./styles";
import { ContainerSplash, ContainerTitleSplash } from "./styles";

export default function SplashScreenPage(){
    
     setTimeout (() =>  {

            // <Link to= "/Login">
            window.location.pathname = "/Login"
            }, 15000 )
                

        return (
            <div>
             
              
            <ContainerSplash>
            <ContainerTitleSplash>SnackTime</ContainerTitleSplash>
            </ContainerSplash>
            </div>
        
    )
}
;