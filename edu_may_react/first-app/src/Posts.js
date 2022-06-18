import React,{useEffect, useState} from 'react';
import Axios from 'axios'
import DisplayPosts from './DisplayPosts';

let Posts=(props)=>{
let [posts,setPosts]=useState();
useEffect(()=>{
let url="https://jsonplaceholder.typicode.com/posts"
Axios.get(url).then((res)=>{
setPosts(res.data)
})


},[])
    return(

        <div>
            <DisplayPosts postsData={posts}/>
        </div>
    )



}
export default Posts;