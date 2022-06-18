import React ,{useState,useEffect}from 'react';
import Axios from 'axios';
import "../src/App.css"
let UserData=()=>{
const [users,setUsers]=useState([]);

useEffect(()=>{
    let url="https://dummyjson.com/products";
    Axios.get(url).
    then((res)=>{
        console.log(res.data)
       setUsers(res.data)
    });
},[])
return(
<div>
{/* <pre>{JSON.stringify(users.products)}</pre> */}
        <table>
               <tr>
               <th>Title</th>
               
                <th>Image</th>
                <th>description</th>
               </tr>
               <tbody>
                {

users.products?.map((product,item)=>{
    return <tr key={item}>
            <th>{product.title}</th>
          
            <th>
                <img src={product.thumbnail} alt={product.brand}  width="200px" height="50px"/>
            </th>
            <th>{product.description}</th>

    </tr>
})

                }
               </tbody>
               </table>



</div>

)

}
export default UserData