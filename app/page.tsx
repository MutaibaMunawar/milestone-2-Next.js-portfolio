// pages/index.js
import React from 'react'
import Page from './components/page'
import About from './components/about'
import Contact from './components/contact'

const Home = () => {
  return (
    <div>
      <Page />
      <About />
      <Contact />
    </div>
  )
}

export default Home;
