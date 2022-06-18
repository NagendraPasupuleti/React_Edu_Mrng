import React, { Fragment } from 'react';
import "./header.css"
class Header extends React.Component {
constructor(props) {   
    super(props); 
    this.state = {
        title:"Developer Funnel",
        keyword:"user text here"
    }

}  

    render(){
        return(
            <Fragment>
                <header >
                    <div className="logo"> {this.state.title}</div>
                    <center>
                    <input type="text"/>
                    <div style={{fontSize:"20px",color:"white"}}>{this.state.keyword}</div>
                    </center>
                 </header>
            </Fragment>
        )

    }

}
export default Header;
















// let Header = ()=>{
//                     return(

//                 <>
//                     <h1><center>React</center></h1>
//                 </>


//                     ) 

//  };
//  export default Header;
