import React from 'react'
import Navbar from '../components/navbar'
import './index.module.css'
import Splash from '../components/splash'
import Cookies from '../components/cookies'
import Rainbow from '../components/rainbow'

const Index = () => {
  return (
    <>
    <Navbar />
    <Splash />
    <Cookies />
    <Rainbow />
    </>
  )
}
export const Head = () => <title>Home Page</title>

export default Index
