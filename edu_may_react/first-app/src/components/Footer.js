import React from 'react'; 

let Footer = (props)=>{ 
    console.log(props);
    
    return(
        <React.Fragment>
            <center>
               <h2> <center>&copy; Copy Rights Reserved {props.year}</center></h2>
            </center>
        </React.Fragment>

    )



};
export default Footer;