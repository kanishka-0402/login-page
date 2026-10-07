"use client"

import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleRegister = async ()=>{
    const response =await fetch("http://localhost:5000/register",{
         method : "post",
         headers:{
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
        email: email,
        password: password
      })
    } )
    const data = await response.json()
       console.log(data)
    
  }
  const handleLogin = async ()=>{
    const response = await fetch("http://localhost:5000/login",{
      method : "post",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify({
        email: email,
        password: password
      })
    } )
    const data = await response.json()
       console.log(data)
    
  }
    
      

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <br></br>

        <button onClick={handleLogin}>Login</button>

        

      </div>

    </div>
  )
}