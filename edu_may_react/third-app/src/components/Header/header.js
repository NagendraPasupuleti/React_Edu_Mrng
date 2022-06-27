import React from 'react';
import "./header.css"


const Header=()=>{

    return(
        <div>
            <header>
            <div id="brand">
                My Best Fooddies
            </div>
            <div id="social">
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="socialImg"/>
                </a>
                <a href="https://www.facebook.com/"  rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="socialImg"/>
                </a>
                <a href="https://www.facebook.com/"  rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="socialImg"/>
                </a>
            </div> 
        </header>
        </div>
    )


}
export default Header;