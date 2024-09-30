import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="mail">
          <div className="mail-data">
            <h6>Sales</h6>
            <p>info@pccareonline.in</p>
          </div>
          <div className="mail-data">
            <h6>Complaint</h6>
            <p>wecare@pccareonline.in</p>
          </div>
        </div>
        <div className="call">
          <div className="call-tab">
            <div className="outer-circle">
              <div className="inner-circle">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
            </div>
            <div className="number">
              <h6>Call us now - For Complaint</h6>
              <p>+91 751 2458201,202,203</p>
            </div>
          </div>
          <div className="call-tab">
            <div className="outer-circle">
              <div className="inner-circle">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
            </div>
            <div className="number">
              <h6>Call us now - For Sales</h6>
              <p>+91 9039013100, 9039016100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header