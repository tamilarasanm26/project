import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndpoint';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // For navigation after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post('/api/auth/login', { email, password });
      const response = request.data;
      console.log(response);

      if (response.success) {
        alert('Login successful');
        navigate('/dashboard'); // Redirect to the dashboard or homepage after login
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="register-link">
          Not registered? <Link to={'/register'}>Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
