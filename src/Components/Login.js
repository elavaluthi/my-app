import React,{useState,useEffect} from 'react'
import {} from 'react-router-dom'
export default function Login() {

  const[password,setPassword]=useState("")
  const[emailId,setEmailId]=useState("")
   async function login(){
    let item={emailId,password}
    console.warn(item)
    
    let result = await fetch("http://localhost:8080/api/adminlogin",{
      method:'post',
      headers:{
        "Content-Type":"application/json",
            "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result =  await  result.json();
    



    

  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h2>Login page</h2>
      <input type ="text" value={emailId}
   onChange={(e)=>setEmailId(e.target.value )} className="form-control"placeholder="email" />
    <br />
    
    <input type ="password"value={password} onChange={(e)=>setPassword(e.target.value )} className="form-control"placeholder="password" />
    <br />
    
    <button onClick={login} className='btn btn-primary' >login</button>
   </div>   
  )
}

