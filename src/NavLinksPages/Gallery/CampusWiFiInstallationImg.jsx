import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CampusWiFiInstallationImg = () => {
  return (
<div className='gallery-image_container'>

<div className='gallery-single_img'>
  <img src="https://www.airwaybroadband.com/Gallery/images/1.jpg" alt="" />
  <div className="gallery-overlay">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </div>
</div>
<div className='gallery-single_img'>
  <img src="https://www.airwaybroadband.com/Gallery/images/2.jpg" alt="" />
  <div className="gallery-overlay">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </div>
</div>
<div className='gallery-single_img'>
  <img src="https://www.airwaybroadband.com/Gallery/images/3.jpg" alt="" />
  <div className="gallery-overlay">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </div>
</div>


</div>
)
}

export default CampusWiFiInstallationImg