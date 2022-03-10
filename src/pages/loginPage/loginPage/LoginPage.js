import React from "react";
import {ContainerForm, MainContainer, ContainerBtn} from "./styles";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import useForm from '../../../hooks/useForm'
import {base_URL} from "../../../constants/URL"
import axios from "axios"
import { setToken } from "../../../helpers/localStorage";
import {Link} from "react-router-dom"
import { TextField } from "@material-ui/core";

export default function LoginPage(){
    
    const {form, onChange, clear} = useForm ({email: "astrodev@future4.com",
    password: "123456"})
    
    const onSubmitForm = (e) =>{
            e.preventDefault()
     console.log(form)
        
    axios.post (`${base_URL}login`, form)
    .then(({data})=>{
      
    setToken(data.token)
    console.log(data)
    })
    
    .catch((err)=>{console.log (err)})    

    }
    
    return(
        <MainContainer>
            <h3>Entrar</h3>
            
            
            <ContainerForm>
            <form onSubmit={onSubmitForm}>
               
            <FormControl>
                <InputLabel htmlFor="InputEmail">Email</InputLabel>
            <TextField
             
             id="InputEmail" 
             variant="outlined" 
             name="email"
             value={form.email}
             onChange={onChange}
             placeholder={""}
             required
             type="email"

             />

            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="InputSenha">Senha</InputLabel>
            <TextField
            
            id="InputSenha" 
            variant="outlined" 
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder={""}
            required
            type="senha"
            
            />

            </FormControl>
                        
           
            </form>
            
            </ContainerForm>
            
            <ContainerBtn>
                Entrar
            </ContainerBtn>
                        

            <Link to="/BasicRegister">
            <p>
            Não possui cadastro? Clique aqui.
            </p>
            </Link>

        </MainContainer>
    )
};

