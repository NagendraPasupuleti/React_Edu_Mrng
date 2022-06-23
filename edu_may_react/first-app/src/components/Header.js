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
handleChange = (event) => {
    this.setState({keyword:event.target.value})
    this.props.userText(event.target.value)
    
   
}

    render(){
             return(
            <Fragment>
                <header >
                    <div className="logo"> {this.state.title}</div>
                    <center>
                   
                    <input onChange={this.handleChange} type="text"  placeholder='Search'/>
                    {/* <div style={{fontSize:"20px",color:"white"}}>{this.state.keyword}</div> */}
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
