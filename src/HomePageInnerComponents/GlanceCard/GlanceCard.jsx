import React from 'react'
import './glancecard.scss'

const GlanceCard = ({ title, content }) => {

    return (
        <div className='glance-card'>
            <div className="glance-data">
                <i className="fa-solid fa-info"></i>
                <h3>{title}</h3>
                <p className='para'>{content}</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default GlanceCard