import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqNewConnection = () => {

    const FaqQuestions = [
        {
            id: 1,
            question: 'Do I have to have a phone line (land line) or cable to get set-up ',
            answer: 'No, The internet service is provided wirelessly through a Radio Frequency Service. ',
        },
        {
            id: 2,
            question: ' How long is the installation time for Wireless Broadband, Fiber Optic and Ready Port?',
            answer: ' After site survey, we need 3 working days for Wireless Broadband, 7 working days for Fiber Optic, and 3 working days for Ready Port.',
        },
        {
            id: 3,
            question: 'How long is the wait to get service?',
            answer: 'We average 2-3 business days and have installed service on the same day. Because Airway Broadband’s Wi-Fi technology is not dependent on, or limited by, your local phone company and its copper wires, service can be installed quickly.',
        },
        {
            id: 4,
            question: 'Where is the service available?',
            answer: 'See Coverage Map or contact sales for coverage updates.',
        },
        {
            id: 5,
            question: 'Do I receive a static IP address?',
            answer: 'Yes, as a Business Broadband service provider, we include a static IP address with each account. Static IP’s are necessary to run VPN’s and many Internet-based services.',
        },
        {
            id: 6,
            question: 'DSL is not available in our location. Will that prevent our company from getting Airway Broadband’s service?',
            answer: 'No, Our systems do not utilize any type of phone equipment; we’re completely independent.',
        },
        {
            id: 7,
            question: 'If I rent my home/apt, can I still get service?',
            answer: 'Yes, with permission from the landlord or owner.',
        },
        {
            id: 8,
            question: 'What is considered a "standard" installation?',
            answer: 'A standard installation includes the mounting of the external radio, running the wire indoors through one small opening, and hooking up the Power Over Ethernet (POE). The installer will run a test to ensure the radio is working at the desired location.',
        },
        {
            id: 9,
            question: 'Do I own the equipment once I pay the installation fee?',
            answer: 'No, All equipment is property of Airway Broadband . The installation fee is payment only for the set-up process.',
        },
        {
            id: 10,
            question: 'I usually pay the same amount every month, why is my bill different this month?',
            answer: 'You can check the details of your bill by using the interactive button on airway broadband website and choosing self care portal Section.',
        },

    ]

    return (
        <div className='faq-component'>
            {
                FaqQuestions.map((faqquestion) => {
                    return <FaqAccordion key={faqquestion.id} {...faqquestion} />


                })
            }
        </div>
        )
}

export default FaqNewConnection