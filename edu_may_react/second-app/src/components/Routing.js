import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";

const Routing=() =>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile} />
        <Route path="/product" component={Product} />
        <Footer/>
        </BrowserRouter>
    )

}

export default Routing;