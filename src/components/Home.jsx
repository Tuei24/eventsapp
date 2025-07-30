import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Events Logo</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Admin/Dashboard">Dashboard</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link to="/Posts">Posts</Link></li>
            <button type="login"><Link to="/Login">Login</Link></button>
            <button type="register"><Link to="/Register">Register</Link></button>
          </ul>
        </nav>
      </header>
      <section className="section">
        <div className="hero">
          <h1>Join Us for Unforgettable Events</h1>
          <p>
            Don't miss out on a series of exciting events designed to inspire,
            connect, and empower. Whether you're looking to network, learn, or
            simply enjoy, there's something for everyone. Sign up today and be
            part of the action!
          </p>
          <button type="register now">Register Now</button>
        </div>
        <img
          src={"https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"}
        />
      </section>

    </>
  )
}

