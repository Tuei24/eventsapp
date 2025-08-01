import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Admin/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
