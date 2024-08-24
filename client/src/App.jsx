import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route  path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App