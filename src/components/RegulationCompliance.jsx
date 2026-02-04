import React from 'react'
import './RegulationCompliance.css'

const complianceItems = [
  {
    title: 'Safety Equipment',
    description: 'We use certified safety equipment and personal protective gear that meets regulatory standards for pest control applications.',
    link: 'https://example.com/safety-equipment'
  },
  {
    title: 'Application Tools',
    description: 'Our application tools are selected and maintained in accordance with industry regulations for safe and effective treatment.',
    link: 'https://example.com/application-tools'
  },
  {
    title: 'Monitoring Devices',
    description: 'Monitoring devices we use comply with relevant standards for accurate detection and reporting in pest management.',
    link: 'https://example.com/monitoring-devices'
  }
]

const RegulationCompliance = () => {
  return (
    <section id="labels-sds" className="regulation-compliance">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Labels/SDS</h2>
          <p className="section-subtitle">Safety data sheets and product labels</p>
        </div>
        <div className="regulation-compliance-grid">
          {complianceItems.map((item) => (
            <div key={item.title} className="compliance-item">
              <h3 className="compliance-item-title">{item.title}</h3>
              <p className="compliance-item-description">{item.description}</p>
              <a
                href="#"
                className="compliance-link"
                aria-hidden="true"
                tabIndex={-1}
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegulationCompliance
