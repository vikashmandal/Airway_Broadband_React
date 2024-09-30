import React, { useState } from 'react'
import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/08/15/50/tv-5017870_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
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