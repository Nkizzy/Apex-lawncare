import React from 'react'
import './RegulationCompliance.css'

const complianceItems = [
  { title: 'Safety Equipment', link: 'https://example.com/safety-equipment' },
  { title: 'Application Tools', link: 'https://example.com/application-tools' },
  { title: 'Monitoring Devices', link: 'https://example.com/monitoring-devices' }
]

const RegulationCompliance = () => {
  return (
    <section id="labels-sds" className="regulation-compliance">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Labels/SDS</h2>
        </div>
        <div className="regulation-compliance-grid">
          {complianceItems.map((item) => (
            <div key={item.title} className="compliance-item">
              <h3 className="compliance-item-title">{item.title}</h3>
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
