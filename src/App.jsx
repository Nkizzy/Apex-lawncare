import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Map from './components/Map'
import Contact from './components/Contact'
import RegulationCompliance from './components/RegulationCompliance'
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
      <Reviews />
      <Map />
      <Contact />
      <RegulationCompliance />
      <Footer />
    </div>
  )
}

export default App

