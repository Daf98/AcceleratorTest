import React from 'react'
import Navbar from '../components/navbar'
import './index.module.css'
import Splash from '../components/splash'
import Cookies from '../components/cookies'

const Index = () => {
  return (
    <>
    <Navbar />
    <Splash />
    <Cookies />
    </>
  )
}
export const Head = () => <title>Home Page</title>

export default Index
