import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  navbar,
  navLogo,
  navLink,
  signButton,
  demoRequest,
  desktopNavbar,
  mobileNavbar,
} from "./navbar.module.css";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
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
      <StaticImage src="../images/logo.png" alt="Logo" />
      <p>Hamburger menu</p>
        {/* <Menu right>
          <Link className={navLink} to="/community">
            Community
          </Link>
          <Link className={navLink} to="/modules">
            Modules
          </Link>
          <Link className={navLink} to="/pricing">
            Pricing
          </Link>
          <Link className={navLink} id={signButton} to="/sign-in">
            Sign In
          </Link>
          <Link className={navLink} id={demoRequest} to="/demo-request">
            Request a Demo
          </Link>
        </Menu> */}
      </nav>
    </>
  );
};

export default Navbar;
