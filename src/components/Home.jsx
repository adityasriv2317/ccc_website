import React from 'react'
import Landing from './Landing'
import About from './About'
import Mentor from './Mentor'
import Contact from './Contact'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header />
        <Landing />
        <About />
        <Mentor />
        <Contact />
    </div>
  )
}

export default Home