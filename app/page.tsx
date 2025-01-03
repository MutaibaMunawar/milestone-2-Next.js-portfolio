// pages/index.js
import React from 'react'
import Page from './components/page'
import About from './components/about'
import Project from './components/project'
import Skills from './components/skill'
import Contact from './components/contact'
import Footer from './components/fotter'



const Home = () => {
  return (
    <div>
      <Page />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
