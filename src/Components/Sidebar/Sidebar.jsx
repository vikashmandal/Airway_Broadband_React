import React from 'react'
import './sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUpRightFromSquare, faComments, faIndianRupeeSign, faHandHoldingMedical, faArrowsRotate, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className='sidebar-links'>
                <li className="icon menu-icon" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                    <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>menu</span>
                </li>
                {/* apply new connection */}
                <li className='icon'>
                    <Link to='https://airwaybroadband.com/new-connection.php' target='_blank'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Apply New Connection</span>
                    </Link>
                </li>
                {/* lodge complaint */}
                <li className='icon'>
                    <Link to='https://airwaybroadband.com/complaint.php' target='_blank'>
                        <FontAwesomeIcon icon={faComments} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Lodge Complain</span>
                    </Link>
                </li>
                {/* check speed link */}
                <li className='icon'>
                    <Link to='https://www.speedtest.net/' target='_blank'>
                        <FontAwesomeIcon icon={faRocket} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Check Speed</span>
                    </Link>
                </li>
                {/* bill payment link */}
                <li className='icon'>
                    <Link to='https://airwaybroadband.com/make_payment-new.php' target='_blank'>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Bill Payment</span>
                    </Link>
                </li>
                {/* self care portal link */}
                <li className='icon'>
                    <Link to='https://airwaybroadband.com/login_to_my_account.php' target='_blank'>
                        <FontAwesomeIcon icon={faHandHoldingMedical} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Self Care Portal</span>
                    </Link>
                </li>
                {/* referral program link */}
                <li className='icon'>
                    <Link to='https://airwaybroadband.com/referral.php' target='_blank'>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                        <span className={`link-text ${isOpen ? 'visible' : 'hidden'}`}>Referral Programe</span>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Sidebar