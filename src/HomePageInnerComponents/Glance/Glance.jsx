import React from 'react'
import './glance.scss'
import GlanceCard from '../GlanceCard/GlanceCard';

const Glance = () => {

    const cardData = [
        {
            id: 1,
            title: 'How it is work',
            content: 'Wire Free Technology'
        },
        {
            id: 2,
            title: 'Offers & Newsletter',
            content: 'Content for card 2'
        },
        {
            id: 3,
            title: 'Why Choose Us?',
            content: 'Airway Broadband'
        },
        {
            id: 4,
            title: '24/7 Help & Support',
            content: 'For all kind queries and problems'
        },
        {
            id: 5,
            title: 'Refer & Earn Cashback',
            content: 'refer to your friends and get cashback'
        },
    ];

    return (
        <div className='glance'>
            <h2>At Glance</h2>

            <div className="glance-card-container">
                {
                        cardData.map(card => (
                            <>
                            <GlanceCard key={card.id} title={card.title} content={card.content} />
                            </>

                        ))
                }
                
            </div>
        </div>
    )
}

export default Glance