import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';
export default function Login() {
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate('/navigate')
    }
  })

  const[password,setPassword]=useState("")
  const[emailId,setEmailId]=useState("")
  const navigate =useNavigate();

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
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate('/navigate')
    
    



    

  }
  return (
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
      <h1>Login page</h1>
      <input type ="text" value={emailId}
   onChange={(e)=>setEmailId(e.target.value )} className="form-control"placeholder="email" />
    <br />
    
    <input type ="password"value={password} onChange={(e)=>setPassword(e.target.value )} className="form-control"placeholder="password" />
    <br />
    
    <button onClick={() => {
                  login();
                  navigate('/navigate');
                }} className='btn btn-primary' >login</button>
   </div>   
   </>
  )
}

