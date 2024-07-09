import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Register() {

  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const handleRegister=()=>{
    e.preventDefault();
    console.log(username,email,password);
  }
  
  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <div className='input-group'>
        <label htmlFor="username">Username</label>
        <input type="text" name='' id="username"
        onChange={(e)=>setUsername(e.target.value)} 
        />
      </div>
      <div className='input-group'>
        <label htmlFor="email">Email</label>
        <input type="email" name='' id="username"
          onChange={(e)=>setEmail(e.target.value)} 
        />
      </div>
      <div className='input-group'>
        <label htmlFor="password">Password</label>
        <input type="password" name='' id="password"
          onChange={(e)=>setPassword(e.target.value)} 
        />
      </div>
      <button type='submit'>Register</button>
      <p className="register-link">
        Already have an account <Link to={'/login'}>Login here</Link>
        </p>
      </form>
    </div>
  )
}

export default Register