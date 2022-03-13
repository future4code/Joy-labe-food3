import React, { useState } from "react";
import { ContainerForm, MainContainer, ContainerBtn, ButtonLogin } from "./styles";
import useForm from '../../../hooks/useForm'
import { base_URL } from "../../../constants/URL"
import axios from "axios"
import { setToken } from "../../../helpers/localStorage";
import { Link } from "react-router-dom"
import { InputAdornment, TextField } from "@material-ui/core";
import { ContainerSubtitle } from "../../registerPage/adressRegisterPage/styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


export default function LoginPage() {

    const { form, onChange, clear } = useForm({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);


    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(form)

        axios.post(`${base_URL}login`, form)
            .then(({ data }) => {

                setToken(data.token)
                clear()
            })

            .catch((err) => { console.log(err) })

    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <MainContainer>
            <ContainerSubtitle>
                <p>Entrar</p>
            </ContainerSubtitle>
            <ContainerForm onSubmit={onSubmitForm}>
                <TextField
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                    id="InputEmail"
                    variant="outlined"
                    label="E-mail"
                    placeholder="email@email.com.br"
                    fullWidth
                    margin="normal"
                    style={{ margin: 8 }}
                />

                <TextField
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    id="InputSenha"
                    variant="outlined"
                    placeholder="*****"
                    fullWidth
                    label="Senha"
                    margin="normal"
                    style={{ margin: 8 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" onClick={handleShowPassword}>
                                {showPassword ? <VisibilityIcon cursor="pointer" /> : <VisibilityOffIcon cursor="pointer" />}
                            </InputAdornment>
                        )
                    }}
                />

                <Link to="/HomePage">
                    <ContainerBtn>
                        <ButtonLogin>Entrar</ButtonLogin>
                    </ContainerBtn>
                </Link>
            </ContainerForm>

            <Link to="/BasicRegister">
                <p>
                    Não possui cadastro? Clique aqui.
                </p>
            </Link>
        </MainContainer>
    )
};

