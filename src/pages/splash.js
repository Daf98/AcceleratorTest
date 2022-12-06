import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {splashScreen, splashLink, firstPar, longPar, splashHeader} from './splash.module.css'

const Splash = () => {
  return (
    <div className={splashScreen}>
        <p className={firstPar}>Join and connect</p>
        <h1 className={splashHeader}>To fasten your<br /> innovation potential</h1>
        <p className={longPar}>AcceleratorApp innovation Community - Tools and community to<br />
         facilitate innovation between all members of our community</p>
        <Link className={splashLink} to="demo-request">Schedule a Demo</Link>
        <Link to="watch-video">
            <StaticImage src='../images/Video.png' />
        </Link>
        <div>Cookies</div>
    </div>
  )
}

export default Splash