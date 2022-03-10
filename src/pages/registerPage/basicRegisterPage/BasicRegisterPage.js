import React, { useState } from "react";
import * as services from "../../../services/apiRequestAxios";
import { 
    Container, 
    ContainerForm, 
    ContainerBtn, 
    ContainerSubtitle, 
    Header, 
    ContainerFooter
} from "./styles";
import logo from "../../../assets/Logo_black.svg";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { setToken } from "../../../helpers/localStorage";

export default function BasicRegisterPage(){

    const {form, onChange} = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault()

        const {name, email, cpf, password} = form
        const body = {
            name,
            email,
            cpf,
            password
        }

        form.password === form.confirmPassword &&
        services.request
        .post(`/signup`, body)
        .then(({data}) => {
            setToken(data.token)
            navigate("/Adressregister")
        })
        .catch(err => console.log(err.response.data.message));
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    return(
        <Container>
            <Header>
                <img alt={""} src={logo}/>
            </Header>
            <ContainerForm onSubmit={register}>
                <ContainerSubtitle>
                    <p>Cadastrar</p>
                </ContainerSubtitle>
                <TextField
                    name="name"
                    value={form.name}
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
                    value={form.email}
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
                    value={form.cpf}
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
                <TextField
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    id="outlined-full-width"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    inputProps={{ pattern: "^.{6,}" }}
                    title="A senha deve ter no mínimo 6 caracteres!"
                    style={{ margin: 8 }}
                    InputProps = {{
                        endAdornment:(
                            <InputAdornment position="end" onClick={handleShowPassword}>
                                 {showPassword ? <VisibilityIcon cursor="pointer"/> : <VisibilityOffIcon cursor="pointer"/>}   
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    required
                    id="outlined-full-width"
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    inputProps={{ pattern: "^.{6,}" }}
                    title="A senha deve ter no mínimo 6 caracteres!"
                    style={{ margin: 8}}
                    color={
                        form.confirmPassword !== "" 
                        && form.password !== form.confirmPassword 
                        && "secondary"
                    }
                    helperText={
                        form.confirmPassword !== "" 
                        && form.password !== form.confirmPassword 
                        && "Deve ser a mesma que a anterior"
                    }
                    InputProps = {{
                        endAdornment:(
                            <InputAdornment position="end" onClick={handleShowPassword}>
                                {showPassword ? <VisibilityIcon cursor="pointer"/> : <VisibilityOffIcon cursor="pointer"/>}   
                            </InputAdornment>
                        )
                    }}
                    />
                <ContainerBtn>
                    <button>Criar</button>
                </ContainerBtn>
                <ContainerFooter>
                    <p>Já possui uma conta?</p>
                    <Link to="/login">Login</Link>
                </ContainerFooter>
            </ContainerForm>
        </Container>
    )
};