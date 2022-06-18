import React, { Fragment } from 'react';
class Header extends React.Component {
constructor(props) {   
    super(props); 
    this.state = {}

}  

    render(){
        const myStyles={
            header:{
                backgroundColor: "blue"
            },

            div:{
                textAlign: "center",
                fontSize: "25px",
                color:"white"

            }
            

        }
        return(
            <Fragment>
                <header style={myStyles.header}>
                    <div style={myStyles.div} >Developer Funnel</div>
                    <center>
                    <input type="text"/>
                    <div style={{fontSize:"20px",color:"white"}}>user text here</div>
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
