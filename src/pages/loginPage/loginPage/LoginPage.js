import React from "react";
import styled,{ContainerForm, MainContainer,} from "./styles";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'

export default function LoginPage(){
    return(
        <MainContainer>
            <h3>Entrar</h3>
            
            
            <ContainerForm>
            <form onSubmit={""}>
               
            <FormControl>
                <InputLabel htmlFor="InputEmail">Email</InputLabel>
            <Input
             
             id="InputEmail" 
             variant="outlined" 
             name={""}
             value={""}
             onChange={""}
             required
             type={"email"}

             />

            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="InputSenha">Senha</InputLabel>
            <Input 
            
            id="InputSenha" 
            variant="outlined" 
            name={""}
            value={""}
            onChange={""}
            required
            type={"senha"}
            
            />

            </FormControl>
            
            <Button color="#green" variant="contained">Entrar</Button>
            
            </form>
            
            </ContainerForm>
            
            <p>
            Não possui cadastro? Clique aqui.
            </p>            
        </MainContainer>
    )
};