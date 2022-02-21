import React, { useEffect, useState } from "react";
import axios from "axios";
import {base_URL} from "../constants/URL"
import GlobalStateContext from "./GlobalStateContext"

export const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])

    const states = {
        restaurantes
    }

    const setters = {
        setRestaurantes
    }

    // const getRestaurante = () => {
    //     const auth ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJjQXBxSzVCY3ZlVWxodzNBdWhhIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldnRlc3RlQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS4yMjItMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXp6eiwgMTc3OCwgNzExIC0gVmlsYSBOLiBDb25jZWnDp8Ojb28iLCJpYXQiOjE2NDUxMTgwODN9.J2c7hQS-Al-e7aEwm4gmpFXm1tf10EvNIsEhYuW-2pI"
    //     axios
    //     .get(`${base_URL}restaurants`, {
    //         headers: {
    //             auth: auth
    //         }
    //     })
    //     .then((res) => console.log(res.data.restaurants))
    //     .catch((err) => console.log(err.data))
    // }

    // useEffect (() => {
    //     getRestaurante()
    // }, [])

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}