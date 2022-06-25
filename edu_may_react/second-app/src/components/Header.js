import React from 'react';
import {Link} from "react-router-dom"

const  Header=()=>{


    return(
        <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">Developer Funnel</Link>
            </div>
            <ul className="nav navbar-nav">
            <li ><Link to="/">Home</Link></li>
            <li><Link  to="/products" >Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
        </nav>
            <hr/>
        </div>
    )
}
export default Header;