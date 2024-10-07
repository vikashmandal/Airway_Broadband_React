import React from 'react'
import './homeproductservice.scss'
import { Link } from 'react-router-dom'

const HomeProductService = () => {
  return (
    <div className='home-products-services-section'>

      <h2>Our Product and Services</h2>

      <div className="home-products-services-container">

        <Link to="https://www.airwaybroadband.com/product_description.php" target='_blank'>
          <div className="product-service-card">
            <div className="product-service-img">
              <img src="./fixed-wi-fi.png" alt="" />

            </div>
            <div className="product-service-data" target='_blank'>
              <h3>Fixed wi-fi <br /> Broadband</h3>
            </div>
          </div>
        </Link>

        <Link to='https://www.airwaybroadband.com/be.php' target='_blank' >
          <div className="product-service-card">
            <div className="product-service-img">
              <img src="./ethernet-broadband.png" alt="" />
            </div>
            <div className="product-service-data">
              <h3>Ethernet <br /> Broadband</h3>
            </div>
          </div>
        </Link>

        <Link>
          <div className="product-service-card">
            <div className="product-service-img">

              <img src="./fiber-broadband.png" alt="" />

            </div>
            <div className="product-service-data">
              <h3>Fiber <br /> Broadband</h3>
            </div>
          </div>
        </Link>
        <Link to='https://www.airwaybroadband.com/diadis.php' target='_blank' >
          <div className="product-service-card">
            <div className="product-service-img">

              <img src="./dia.png" alt="" />
            </div>
            <div className="product-service-data">
              <h3>DIA-LL</h3>
            </div>
          </div>
        </Link>
        <Link to='https://www.airwaybroadband.com/building_enrollment.php' target='_blank'>
          <div className="product-service-card">
            <div className="product-service-img">

              <img src="./building-ephoto.png" alt="" />
            </div>
            <div className="product-service-data">
              <h3>Building <br /> Enrollment</h3>
            </div>
          </div>
        </Link>

      </div>



    </div>
  )
}

export default HomeProductService