import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import SocialMedia from './components/SocialMedia'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <SocialMedia />
      <Map />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

