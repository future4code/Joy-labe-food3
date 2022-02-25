import React from "react";
import styled,{ContainerForm, MainContainer,} from "./styles";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import useForm from '../../../hooks/useForm'
import {base_URL} from "../../../constants/URL"
import axios from "axios"
import { setToken } from "../../../helpers/localStorage";
import {Link} from "react-router-dom"

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
            <Input
             
             id="InputEmail" 
             variant="outlined" 
             name="email"
             value={form.email}
             onChange={onChange}
             placeholder={"E-mail"}
             required
             type="email"

             />

            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="InputSenha">Senha</InputLabel>
            <Input 
            
            id="InputSenha" 
            variant="outlined" 
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder={"Senha"}
            required
            type="senha"
            
            />

            </FormControl>
            
            <button color="#green" variant="contained">Entrar</button>
            
            </form>
            
            </ContainerForm>
          
            <Link to="/BasicRegister">
            <p>
            Não possui cadastro? Clique aqui.
            </p>
            </Link>

        </MainContainer>
    )
};

