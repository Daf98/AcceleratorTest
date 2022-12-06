import React from 'react'
import Navbar from '../components/navbar'
import './index.module.css'
import Splash from './splash'

const Index = () => {
  return (
    <>
    <Navbar />
    <Splash />
    </>
  )
}
export const Head = () => <title>Home Page</title>

export default Index
