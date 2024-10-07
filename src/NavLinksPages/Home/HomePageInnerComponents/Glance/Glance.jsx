import React from 'react'
import './glance.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEnvelope, faCircleQuestion, faHeadset, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Glance = () => {
    return (
        <div className='glance-section'>

            <h2>At Glance</h2>

            <div className='glance-card-container'>


                <div className="glance-card">
                    <div className="glance-icon">
                        <FontAwesomeIcon icon={faInfo} />
                    </div>
                    <div className="glance-data">
                        <h5>How it is work</h5>
                        <small>Wire free Technology</small>
                    </div>
                    <Link to='https://www.airwaybroadband.com/working.php' target='_blank'>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
                <div className="glance-card">
                    <div className="glance-icon">
                        <FontAwesomeIcon icon={faEnvelope} />            </div>
                    <div className="glance-data">
                        <h5>Offers & Newsletter</h5>
                        <small>Limited time offer!</small>
                    </div>
                    <Link>
                    <button>
                        Read More
                    </button>
                    </Link>
                </div>
                <div className="glance-card">
                    <div className="glance-icon">
                        <FontAwesomeIcon icon={faCircleQuestion} />            </div>
                    <div className="glance-data">
                        <h5>Why Choose US?</h5>
                        <small>Airway Broadband</small>
                    </div>
                    <Link>
                    <button>
                        Read More
                    </button>
                    </Link>
                </div>
                <div className="glance-card">
                    <div className="glance-icon">
                        <FontAwesomeIcon icon={faHeadset} />            </div>
                    <div className="glance-data">
                        <h5>Help & Support</h5>
                        <small>For all kind of queries or problems</small>
                    </div>
                    <Link to='https://www.airwaybroadband.com/support.php' target='_blank'>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
                <div className="glance-card">
                    <div className="glance-icon">
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div className="glance-data">
                        <h5>Refer & Earn Cashback   </h5>
                        <small>Refer to your friends & get Cashback</small>
                    </div>
                    <Link to='https://www.airwaybroadband.com/referral.php' target='_blank'>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Glance