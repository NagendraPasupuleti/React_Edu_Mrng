import React,{useEffect, useState} from 'react';
import Axios from 'axios'

let DisplayPosts=(props)=>{
    return(

        <div>
            <pre>{props.postsData}</pre>
          
        </div>
    )



}
export default DisplayPosts;