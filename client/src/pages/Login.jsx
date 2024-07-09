import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { post } from '../services/ApiEndpoint'
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(email,password);
    try {
      const request = await post('/api/auth/login',{email,password})
      const response = request.data
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email"name=''id='email'
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password"name=''id='password'
           onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
        <p className="register-link">
          Not register? <Link to={'/register'}>Register here</Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Login