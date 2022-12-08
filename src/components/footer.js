import React from "react";
import {
  footerContainer,
  footerArrow,
  inputEmail,
  footerGrid,
  footerItem,
  footerTitle,
  footerIcon,
  separatorLine,
  mobileFooter,
} from "./footer.module.css";
import { Link } from "gatsby";
import icon1 from "../images/footer/LinkedIn.png";
import icon2 from "../images/footer/Facebook.png";
import icon3 from "../images/footer/Vector.png";
import icon4 from "../images/footer/Twitter.png";

const Footer = () => {
  return (
    <>
      <div className={footerContainer}>
        <h2>Join our growing community</h2>
        <p>Sign up for news and updates about AcceleratorApp</p>
        <div className={inputEmail}>
          <input type="text" placeholder="Your email" />
          <Link to="/newsletter" id={footerArrow}>
            →
          </Link>
        </div>
        <div className={footerGrid}>
          <div className={footerItem}>
            <h3 className={footerTitle}>Community</h3>
            <ul className={footerItem}>
              <li>Incubator/Accelerator</li>
              <li>Corporations</li>
              <li>Startups</li>
              <li>Investor</li>
              <li>Open Challenges</li>
            </ul>
          </div>
          <div className={footerItem}>
            <h3 className={footerTitle}>Modules</h3>
            <ul className={footerItem}>
              <li>Coaching Module</li>
              <li>Data Module</li>
              <li>Ecosystem Module</li>
              <li>LMS Module</li>
              <li>Events</li>
              <li>Application Processing</li>
            </ul>
          </div>
          <div className={footerItem}>
            <h3 className={footerTitle}>Company</h3>
            <ul className={footerItem}>
              <li>About Us</li>
              <li>Careers (We're hiring!)</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={footerItem}>
            <h3 className={footerTitle}>Documentation</h3>
            <ul className={footerItem}>
              <li>Documentation</li>
              <li>Release log</li>
              <li>FAQ</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className={footerItem}>
            <h3 className={footerTitle}>Follow</h3>
            <ul className={footerItem}>
              <Link to="/linkedin">
                <img src={icon1} alt="LinkedIn" className={footerIcon} />
              </Link>
              <Link to="/facebook">
                <img src={icon2} alt="Facebook" className={footerIcon} />
              </Link>
              <Link to="/vector">
                <img src={icon3} alt ="Vector" className={footerIcon} />
              </Link>
              <Link to="/twitter">
                <img src={icon4} alt="Twitter" className={footerIcon} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <ul className={mobileFooter}>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Terms Of Use</li>
          <li>DPA</li>
          <li>Subprocessors</li>
        </ul>
        <ul className={mobileFooter}>
          <li>Copyright © 2022 AcceleratorApp All Rights Reserved</li>
          <div id={separatorLine} />
          <li>🌐 English</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
