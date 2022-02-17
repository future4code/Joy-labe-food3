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
            <FormControl>
                <InputLabel htmlFor="InputEmail">Email</InputLabel>
            <Input id="InputEmail" variant="outlined" />
            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="InputSenha">Senha</InputLabel>
            <Input id="InputSenha" variant="outlined" />
            </FormControl>
            
            <Button color="#green" variant="contained">Entrar</Button>
            
            
            </ContainerForm>
            
            <p>
            Não possui cadastro? Clique aqui.
            </p>            
        </MainContainer>
    )
};