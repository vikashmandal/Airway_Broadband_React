import React from 'react'
import './gallery.scss'
import { useState } from 'react';
import GalleryData from './GalleryData';
import BrandingVideo from './BrandingVideo';
import EventAndCelebrationImg from './EventAndCelebrationImg';
import Video from './Video';
import EventAndPromotionImg from './EventAndPromotionImg';
import CampusWiFiInstallationImg from './CampusWiFiInstallationImg';
import TowerInstallationImg from './TowerInstallationImg';
import CpeInstallationImg from './CpeInstallationImg';
import PopInstallationImg from './PopInstallationImg';

const Gallery = () => {

  
    // MAIN HEADING 
    const [heading, setHeading] = useState('POP Installation');
    // CONTENT DATA
    const [currentContent, setCurrentContent] = useState(<GalleryData />);

    const changeHeadingAndContent = (newHeading, content) => {
        setHeading(newHeading);
        setCurrentContent(content);
    };

  return (
    <div className='gallery-section flex'>
        <div className="side-list f-1">
            <ul className='h-100'>
                <li onClick={() => changeHeadingAndContent('POP Installation ', <PopInstallationImg />)}>POP Installation</li>
                <li onClick={() => changeHeadingAndContent('CPE Installation', <CpeInstallationImg />)}>CPE Installation</li>
                <li onClick={() => changeHeadingAndContent('Tower Installation', <TowerInstallationImg />)}>Tower Installation </li>
                <li onClick={() => changeHeadingAndContent('Campus Wi-Fi Installation', <CampusWiFiInstallationImg />)}>Campus Wi-Fi Installation</li>
                <li onClick={() => changeHeadingAndContent('Event and Promotion', <EventAndPromotionImg />)}>Event and Promotion</li>
                <li onClick={() => changeHeadingAndContent('Video', <Video />)}>Video</li>
                <li onClick={() => changeHeadingAndContent('Event & Celebration\'s', <EventAndCelebrationImg />)}>Event & Celebration's</li>
                <li onClick={() => changeHeadingAndContent('Branding Video', <BrandingVideo />)}>Branding Video's</li>
            </ul>
        </div>
        <div className="image f-4">
            <h2 className='h2'>{heading}</h2>
            {currentContent}

        </div>

    </div>
)
}

export default Gallery