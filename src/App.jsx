import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import Events from './components/Events'
import Attendees from './components/Attendees'
import Analytics from './components/Analytics'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="Admin/Dashboard" element={<Dashboard />} />
          <Route path="Admin/Calendar" element={<Calendar />} />
          <Route path="Admin/Events" element={<Events />} />
          <Route path="Admin/Attendees" element={<Attendees />} />
          <Route path="Admin/Analytics" element={<Analytics />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
