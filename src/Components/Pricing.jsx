import React from 'react'

const Pricing = () => {
  return (
    <div className="Pricing container">
    <header className="section-header">
      <h3>Pricing</h3>
      <p>
        We believe in our clients and our strength lies in developing close
        working relationships to help them succeed
      </p>
    </header>
    <div className="row flex-items-xs-middle flex-items-xs-center">
      {/* Basic Plan  */}
      <div className="col-xs-12 col-lg-4">
        <div className="card">
          <div className="card-header">
            <p>Starting from</p>
            <h3>
              <span className="currency">$</span>100
              <span className="period" />
            </h3>
          </div>
          <div className="card-block">
            <h4 className="card-title">Website Assistant</h4>
            <ul className="list-group">
              <li className="list-group-item">Website AI Assistant</li>
              <li className="list-group-item">Script Integration</li>
              <li className="list-group-item">OpenAI Integration</li>
              <li className="list-group-item">No hidden Charges</li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0"
              className="btn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Regular Plan  */}
      <div className="col-xs-12 col-lg-4">
        <div className="card">
          <div className="card-header">
            <p>Starting from</p>
            <h3>
              <span className="currency">$</span>250
              <span className="period" />
            </h3>
          </div>
          <div className="card-block">
            <h4 className="card-title">Whatsapp AI Chatbot</h4>
            <ul className="list-group">
              <li className="list-group-item">FAQ replies</li>
              <li className="list-group-item">OpenAI Integration</li>
              <li className="list-group-item">Custom knowladge addons</li>
              <li className="list-group-item">24/7 Live and active</li>
              <li className="list-group-item">Webhook Integration</li>
              <li className="list-group-item">No hidden cost</li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0"
              className="btn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Premium Plan  */}
      <div className="col-xs-12 col-lg-4">
        <div className="card">
          <div className="card-header">
            <p>Starting from</p>
            <h3>
              <span className="currency">$</span>350
              <span className="period" />
            </h3>
          </div>
          <div className="card-block">
            <h4 className="card-title">Outbound Call Assistant</h4>
            <ul className="list-group">
              <li className="list-group-item">Customer support Assistant</li>
              <li className="list-group-item">Custom knowladge addons</li>
              <li className="list-group-item">Database Integration</li>
              <li className="list-group-item">Inbound Calling Feature</li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0"
              className="btn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Pricing