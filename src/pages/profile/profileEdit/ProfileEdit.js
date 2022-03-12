import React, { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import TextField from '@material-ui/core/TextField';
import { Container, ContainerForm } from "./styles";
import useForm from "../../../hooks/useForm";
import * as services from "../../../services/apiRequestAxios";
import { getToken } from "../../../helpers/localStorage";

export default function ProfileEdit(){

    const { form, onChange, setForm } = useForm({});

    const profileUser = () =>{
        services.request
        .get(`/profile`,{
            headers:{
                auth: getToken()
            }
        })
        .then(({data}) => setForm(data.user))
        .catch(err => console.log(err))
    };

    const editProfile = () =>{
        services.request
        .put(`profile`, form,{
            headers : {
                auth : getToken()
            }
        })
        .then(alert("Perfil atualizado!"))
        .catch(err => alert(err.reponse.data))
    }

    useEffect(()=>{
        profileUser();
    },[]);

    return(
        <Container>
            <Header pageName={"Editar"}/>
            <ContainerForm onSubmit={editProfile}>
            <TextField
                    name="name"
                    value={form.name || ''}
                    onChange={onChange}
                    type="text"
                    required
                    id="outlined-full-width"
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="email"
                    value={form.email || ''}
                    onChange={onChange}
                    type="email"
                    required
                    id="outlined-full-width"
                    label="E-mail"
                    placeholder="email@email.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <TextField
                    name="cpf"
                    value={form.cpf || ''}
                    onChange={onChange}
                    required
                    id="outlined-full-width"
                    label="CPF"
                    placeholder="000.000.000-00"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                <button>Salvar</button>
            </ContainerForm>

        </Container>

    )
};