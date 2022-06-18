import React,{useState} from 'react';

let UserConsole=()=>{
    let [user,setUser] =useState({userName:"",password:""})

    let handleChange=(e)=>{
        setUser({
            userName:e.target.value,
            password:e.target.value

        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user)


    }


    return (

        <div> 
            <pre>{JSON.stringify(user)}</pre> 
            <form onSubmit={handleSubmit} >
                <input 
                 onChange={handleChange}
                type="text" 
                name="userName"
                placeholder  = "User Name" 
                value = {user.userName}/><br/>

                <input
                  onChange={handleChange}
                    name="password" 
                    type="password" 
                     placeholder = "Pass Word" 
                     value = {user.password}/><br/>

                <button type="submit">submit</button>

                </form>
            
            
            
            
          </div>

    )
}


export default UserConsole