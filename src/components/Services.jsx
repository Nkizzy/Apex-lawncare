import React, { useState } from 'react'
import './Services.css'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: 'General Pest Management',
      description: 'Comprehensive pest control for ants, roaches, spiders, and other common pests. Safe, professional treatments that protect your family and pets.',
      price: 'Starting at $175',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    },
    {
      title: 'Mosquito and Tick Control',
      description: 'Reduce mosquitoes and ticks in your yard with barrier treatments and ongoing control. Enjoy your outdoor space with fewer bites and lower risk of tick- and mosquito-borne illness.',
      price: 'Starting at $65/month',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Lawn and Vegetation Management',
      description: 'Targeted applications to remove unwanted plants and weeds from business and residential properties, to improve street appeal.',
      price: 'Starting at $65/month',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0dff?w=800&h=600&fit=crop'
    },
    {
      title: 'Bed Bug Extermination',
      description: 'Complete bed bug elimination using heat treatment and targeted applications. We ensure thorough removal and provide follow-up inspections.',
      price: 'Starting at $450',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Rodent Removal',
      description: 'Comprehensive rodent control including mice, rats, and squirrels. We identify entry points, remove existing pests, and prevent future infestations.',
      price: 'Starting at $300',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    }
  ]

  const activeService = services[activeTab]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Expert pest control solutions tailored to your needs</p>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Desktop Tabbed Layout */}
        <div className="services-tabbed">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="services-content">
            <div className="service-content-info">
              <div className="service-content-header">
                <h3 className="service-content-title">{activeService.title}</h3>
                <p className="service-content-price">{activeService.price}</p>
              </div>
              <p className="service-content-description">{activeService.description}</p>
            </div>
            <div className="service-content-image">
              <div className="service-image-wrap">
                <img src={activeService.image} alt={activeService.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

