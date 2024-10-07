import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const PlanTarrifCard = ({ title, description, imageUrl }) => {
    return (
        <div className='plan-card'>
            <p className='plan-card-info'> Essential Home-4096-6Month </p>

            <div className='plan-card-priceinfo'>
                <h3 className='plan-card-validity'>1 Month Plan</h3>
                <div>
                <span className='rs-symbol'> ₹</span>
                <span className='plan-card-price'>299.00</span>
                </div>
            </div>
            <div className='plan-card-priceinfo'>
                <h3 className='plan-card-validity'>6 Month's Plan</h3>
                <div>
                    {/* <FontAwesomeIcon className='plan-card-pricesymbol' icon={faIndianRupeeSign} /> */}
                    <span className='rs-symbol'> ₹</span>

                    <span className='plan-card-price'>599.00</span>
                </div>
            </div>
            <div className='plan-card-priceinfo'>
                <h3 className='plan-card-validity'>12 Month's Plan</h3>
                <div>
                <span className='rs-symbol'> ₹</span>
                <span className='plan-card-price'>2999.00</span>
                </div>
            </div>

            <ul className='plan-card-extrainfo'>
                <li>Access Time - Any Time</li>
                <li>FUP Limit (DL/UL) - 800 GB </li>
                <li>Billing Cycle - Monthly</li>
                <li>4 Mbps for 800 GB data Usages Beyond 2 Mbps Unlimited</li>
            </ul>
            <div className="plan-card-button">
                <button>Apply Now</button>
                <button>Details</button>
            </div>


{/* chatgpt sample */}

            <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>


        </div>
    )
}

export default PlanTarrifCard