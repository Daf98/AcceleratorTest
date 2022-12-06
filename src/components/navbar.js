import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {navbar, navLogo, navLink, signButton, demoRequest} from 
"./navbar.module.css"
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav className={navbar}>
    <div className={navLogo}>
        <StaticImage src='../images/logo.png' alt="Logo" />
        <p>AcceleratorApp</p>
    </div>
    <ul>
        <li><Link className={navLink} to="/community">Community</Link></li>
        <li><Link className={navLink} to="/modules">Modules</Link></li>
        <li><Link className={navLink} to="/pricing">Pricing</Link></li>
        <li><Link className={navLink} id={signButton} to="/sign-in">Sign In</Link></li>
        <li><Link className={navLink} id={demoRequest} to="/demo-request">Request a Demo</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar
