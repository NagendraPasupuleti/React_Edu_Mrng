import React from 'react';
import "./footer.css"


const Footer=()=>{

    return(
        <footer>
            <hr/>
            <center>
            <h3> &copy; Best Fooddies</h3>
                <h5>All rights reserved</h5>
            
            </center>
            <div className="footDiv">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footDiv noborder">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
        </footer>
    )


}
export default Footer;