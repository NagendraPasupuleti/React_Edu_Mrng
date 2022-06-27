import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import Profile from "./Profile";
import Header from "./Header";
import ProductDetail from './ProductsDetail';

const Routing=() =>{
    return(
        <BrowserRouter>
        
        <div className='container-fluid'>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route  path="home" element={<Home/>}/>
                <Route  path="products" element={<Product/>} />
                <Route path="products/:item" element={<ProductDetail/>} />
                <Route  path="profile" element={<Profile/>} />
                <Route path="*" element={
                    <div>
                        <center>
                            <h3>Page not found</h3>
                        </center>
                    </div>
                }/>
            </Route>
        </Routes>
        </div>
       
        </BrowserRouter>
    )

}

export default Routing;

