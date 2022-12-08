import { Link } from "gatsby";
import React from "react";
import {
  cookieSpan,
  acceptCookies,
  knowMore,
  cookiePolicy,
} from "./cookies.module.css";

const Cookies = () => {
  return (
    <span className={cookieSpan}>
      <p>
        By using this site on the AcceleratorApp network, you agree with our use
        of cookies
      </p>
      <Link className={acceptCookies} to="/">
        Accept cookies
      </Link>
      <Link className={knowMore} to="/cookies">
        Want to know more?
      </Link>
      <Link className={cookiePolicy} to="cookie-policy">
        Read our cookie policy
      </Link>
    </span>
  );
};

export default Cookies;
