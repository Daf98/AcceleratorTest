import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {
    incubator,
    startup,
    corporations,
    openChallenge,
    investor
}
from './rainbow.module.css'
const Rainbow = () => {
  return (
    <>
    <StaticImage className={incubator} src='../images/Incubator.png' />
    <StaticImage className={startup} src='../images/Startup.png' />
    <StaticImage className={corporations} src='../images/Coporations.png' />
    <StaticImage className={openChallenge} src='../images/Open-Challenge.png' />
    <StaticImage className={investor} src='../images/Investor.png' />
    </>
  )
}

export default Rainbow