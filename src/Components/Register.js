import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function Register() {
  

  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[emailId,setEmailId]=useState("")
  const navigate=useNavigate()

  async function signup()
  {
    let item={name,password,emailId}
    console.warn(item)

    let result = await fetch("http://localhost:8080/api/signupservice",{
            method:'post',
            body:JSON.stringify(item),
             headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
  }


}

  )
  result= await result.json()
  console.warn("result",result)
  
  }
  return (
    <>
    <Header/>
   <div className="col-sm-6 offset-sm-3">
    <h1>Registerage</h1>
    <input type ="text" value={name} onChange={(e)=>setName(e.target.value )}className="form-control"placeholder="name"/>
    <br />
    <input type ="password"value={password} onChange={(e)=>setPassword(e.target.value )} className="form-control"placeholder="password" />
    <br />
    <input type ="text" value={emailId}
   onChange={(e)=>setEmailId(e.target.value )} className="form-control"placeholder="email" />
    <br />
    <button  onClick={() => {
                  signup();
                  navigate('/login');
                }} className='btn btn-primary' >signup</button>
   </div>   
   </> 
   
  )  
}
