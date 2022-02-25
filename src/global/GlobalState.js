import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_URL } from "../constants/URL"
import GlobalStateContext from "./GlobalStateContext"
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState({})
    
    const getRestaurants = () => {
        const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJjQXBxSzVCY3ZlVWxodzNBdWhhIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldnRlc3RlQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS4yMjItMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXp6eiwgMTc3OCwgNzExIC0gVmlsYSBOLiBDb25jZWnDp8Ojb28iLCJpYXQiOjE2NDUxMTgwODN9.J2c7hQS-Al-e7aEwm4gmpFXm1tf10EvNIsEhYuW-2pI"
        axios
            .get(`${base_URL}restaurants`, {
                headers: {
                    auth: auth
                }
            })
            .then(async (res) => {
                const allRestaurants = res.data.restaurants
                
                const promise = allRestaurants.map((restaurant) => {
                    return axios.get(`${base_URL}restaurants/${restaurant.id}`, {
                        headers: {
                            auth: auth
                            }
                    })
                })
                
                const getPromise = await Promise.all(promise)
                const filterListRestaurant = getPromise.map((item) => item.data.restaurant)
                
                setRestaurantes(filterListRestaurant)
            })
            .catch((err) => console.log(err.data))
    }
    console.log(restaurantes);

    useEffect(() => {
        if (!restaurantes.length) {
            getRestaurants()
        }
    }, [])

    const states = {
        restaurantes,
        restaurantDetail
    }

    const setters = {
        setRestaurantes,
        setRestaurantDetail
    }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
