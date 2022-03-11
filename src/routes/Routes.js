import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SplashScreenPage from "../pages/loginPage/splashScreenPage/SplashScreenPage";
import LoginPage from "../pages/loginPage/loginPage/LoginPage";
import AdressRegisterPage from "../pages/registerPage/adressRegisterPage/AdressRegisterPage";
import BasicRegisterPage from "../pages/registerPage/basicRegisterPage/BasicRegisterPage";
import RestaurantsPage from "../pages/restaurantsPage/RestaurantsPage";
import SearchPage from "../pages/searchPage/SearchPage";
import ShoppingCartPage from "../pages/shoppingCartPage/ShoppingCartPage";
import GlobalStyle from "../styles/global";
import ProfilePage from "../pages/profile/profilePage/ProfilePage"
export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<SplashScreenPage/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/AdressRegister" element={<AdressRegisterPage/>}/>
                <Route path="/BasicRegister" element={<BasicRegisterPage/>}/>
                <Route path="/Restaurants/:id" element={<RestaurantsPage/>}/>
                <Route path="/Search" element={<SearchPage/>}/>
                <Route path="/ShoppingCart" element={<ShoppingCartPage/>}/>
                <Route path="/ProfilePage" element={<ProfilePage/>}/>
                {/* <Route path="/Profile/edit" element={<ProfileEdit/>}/> */}
                

            </Routes>
            <GlobalStyle/>
        </BrowserRouter>
    )
}