import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import userData from "./userData";

let Routing = ()=>{
return(
    <div>
        <BrowserRouter>
         <Route exact path="/users" component={userData}/>
        </BrowserRouter>

    </div>


)

}
export default Routing