import React from 'react'
import './header.scss'
import { Facebook, Twitter, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">

        <div style={{ display: `flex`, gap: `12px` }} className="header-social-icons">
          <Link to=''>
            <Facebook className='header-icon' />
          </Link>
          <Link to='https://x.com/Airwaygwalior'  target="_blank">
            <Twitter className='header-icon' />
          </Link>
          <Link  to='https://www.youtube.com/channel/UCpTjIO3NduQFgrzq5TVjRUA'  target="_blank">
            <YouTube className='header-icon' />
          </Link>
        </div>

        <div className="header-call">

          <div className="header-call-tab">
            <div className="header-number">
              <h6  > Complaint -</h6>
              <p>+91 7514888300</p>
              < p >wecare@pccareonline.in</p>
            </div>
          </div>

          <span>|</span>

          <div className="header-call-tab">
            <div className="header-number" >
              <h6 > Sales -</h6>
              < p >+91 9039013100, 9039016100</p>
              < p >info@pccareonline.in</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header