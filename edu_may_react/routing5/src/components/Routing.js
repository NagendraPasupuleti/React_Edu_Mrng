import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetail from './ProductsDetail';

const Routing=() =>{
    return(
        <BrowserRouter>
        <Header/>
        <div className='container-fluid'>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/products" component={Product} />
        <Route path="/products/:item" component={ProductDetail} />

        </div>
        <Footer/>
        </BrowserRouter>
    )

}

export default Routing;