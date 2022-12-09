import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  navLogo,
  navLink,
  signButton,
  demoRequest,
  desktopNavbar,
  mobileNavbar,
  mobileLink,
} from "./navbar.module.css";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

const Navbar = () => {
  const [nav, showNav] = useState(false);
  const Global = createGlobalStyle`
  body, html {
    margin: 0;
  }
  `;
  const MenuIcon = styled.button`
  position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    cursor: pointer;
    z-index: 5;

    div {
      width: 1.5rem;
      height: .2rem;
      background-color: white;
      border-radius: 5px;
      transform-origin: 1px;
      position; relative;
    }
  `;
  const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: ${({ nav }) => (nav ? "100vh" : "50px")};
    position: absolute:
    top: 0;
    right: 0;
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
    ul {
      display: flex;
      flex-direction: column;
    }
  `;
  return (
    <>
      <nav className={desktopNavbar}>
        <div className={navLogo}>
          <StaticImage src="../images/logo.png" alt="Logo" />
          <p>AcceleratorApp</p>
        </div>
        <ul>
          <li>
            <Link className={navLink} to="/community">
              Community
            </Link>
          </li>
          <li>
            <Link className={navLink} to="/modules">
              Modules
            </Link>
          </li>
          <li>
            <Link className={navLink} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className={navLink} id={signButton} to="/sign-in">
              Sign In
            </Link>
          </li>
          <li>
            <Link className={navLink} id={demoRequest} to="/demo-request">
              Request a Demo
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={mobileNavbar}>
        <Global />
        <MenuIcon onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
          <ul>
            <li>
              <Link className={mobileLink} to="/community">
                Community
              </Link>
            </li>
            <li>
              <Link className={mobileLink} to="/modules">
                Modules
              </Link>
            </li>
            <li>
              <Link className={mobileLink} to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className={mobileLink} to="/sign-in">
                Sign In
              </Link>
            </li>
            <li>
              <Link className={mobileLink} to="/demo-request">
                Request a Demo
              </Link>
            </li>
          </ul>
        </MenuLinks>
      </nav>
    </>
  );
};

export default Navbar;
