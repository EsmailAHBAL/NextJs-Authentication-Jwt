import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function Home() {
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [message,setMessage] = useState('you are not login')
  const login =async()=>{

    const body ={
      username,password
    }
    await fetch(`http://localhost:3000/api/log`,
    {
      method:'POST',
      headers :{
        'Content-Type':'application/json'
      }
      ,
      body:JSON.stringify(body)
  
    }).then(res =>{
     
     if(res.ok){
      return res.json()
     } 
    })
    .then(data=>{
      const jsn =jwt.decode(data.token)
     
   setMessage(`
   Welcome == :  ${jsn.username}
   ${jsn.admin ? '== : admin' : '== :user'}
   `)
    })
    
  }
  return (
  
    <div>
    
    
    <p>{message}</p>
    <div className="container mt-5">
      <form className="form w-50" method='POST' >
        <div className="field">
        <input class="input is-info" type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        </div>
        <div className="field">
        <input class="input is-info" type="password" placeholder="Password"
         value={password}
        onChange={(e)=>setPassword(e.target.value)}            />
        </div>
        <div className="field">
          <button
          type='button'
          className="button is-info"
          
          onClick={()=>login()}>
            Login
          </button>
        </div>
      </form>
    </div></div>
  
  )
}
