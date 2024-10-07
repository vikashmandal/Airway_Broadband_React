import React from 'react'
import './homefacts.scss'

const HomeFacts = () => {
  return (
    <div className='home-fact-section'>

      <h2>Facts About Airway Broadband</h2>
      <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dicta, iste nemo officiis cumque aperiam accusantium qui repellat blanditiis odio!</p>
      <div className="home-fact-card-container">

        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./indianrupee.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./no-phone-line.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./switching-is-easy.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./free-phone-calls.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./reliable-highspeed.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./adaptable-technologies.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
        <div className="home-fact-card">
          <div className="home-fact-img">
            <img src="./business-icon.png" alt="" />
          </div>
          <div className="home-fact-data">
            <h3>Affordable Packages</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFacts