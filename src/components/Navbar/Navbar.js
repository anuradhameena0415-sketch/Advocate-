import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
		    <ul className="main-menu">
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">HOME</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="about">About</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="services">Services</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="blog">Blog</NavLink></li>
		    </ul>
		</nav>
    )
}

export default Navbar
