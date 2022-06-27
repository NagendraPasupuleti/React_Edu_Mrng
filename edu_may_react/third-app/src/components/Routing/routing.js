import React from 'react';
import  {BrowserRouter,Route} from "react-router-dom"
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Home from '../Home/Home';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>

        <Footer/>
        
        
        </BrowserRouter>

    )



}
export default Routing;