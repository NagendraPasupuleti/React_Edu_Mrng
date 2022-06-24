import React from 'react';
import {Link} from "react-router-dom"

const  Header=()=>{


    return(
        <div>
            <center>Developer Funnel</center>
            <center>
        <Link to="/"> Home</Link>
        <Link to="/profile"> Profile</Link>
        <Link to="/product">Products</Link>
             </center>
            <hr/>
        </div>
    )
}
export default Header;