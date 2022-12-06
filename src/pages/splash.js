import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Splash = () => {
  return (
    <div>
        <p>Join and connect</p>
        <h1>To fasten your innovation potential</h1>
        <p>AcceleratorApp innovation Community - Tools and community to facilitate
         innovation between all members of our community</p>
        <Link to="demo-request">Schedule a Demo</Link>
        <StaticImage src='../images/Video.png' />
        <div>Cookies</div>
    </div>
  )
}

export default Splash