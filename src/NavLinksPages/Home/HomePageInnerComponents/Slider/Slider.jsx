import React, { useState } from 'react'
import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        
        '/slider3.jpg',
        '/slider.jpg',
        '/slider1.jpg',
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prevSlide) => prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prevSlide) => prevSlide + 1)
    }

    return (
        <div className='slider'>
            <div className="black-overlay"></div>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="arrow-icon" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="arrow-icon" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}

export default Slider