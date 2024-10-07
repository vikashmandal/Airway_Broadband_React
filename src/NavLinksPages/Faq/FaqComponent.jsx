import React from 'react'
import './faq.scss'
import FaqAccordion from './FaqAccordion'

const FaqComponent = () => {

    const FaqQuestions = [
        {
            id:1,
            question: 'Do I have to have a phone line (land line) or cable to get set-up? ',
            answer: 'No, The internet service is provided wirelessly through a Radio Frequency Service. ',
        },
        {
            id:2,
            question: ' How long is the installation time for Wireless Broadband, Fiber Optic and Ready Port?',
            answer: ' After site survey, we need 3 working days for Wireless Broadband, 7 working days for Fiber Optic, and 3 working days for Ready Port.',
        },
        {
            id:3,
            question: 'How long is the wait to get service? ',
            answer: 'We average 2-3 business days and have installed service on the same day. Because Airway Broadband’s Wi-Fi technology is not dependent on, or limited by, your local phone company and its copper wires, service can be installed quickly.',
        },
        {
            id:4,
            question: 'Where is the service available?',
            answer: 'See Coverage Map or contact sales for coverage updates.',
        },
        {
            id:5,
            question: 'Do I receive a static IP address?',
            answer: 'Yes, as a Business Broadband service provider, we include a static IP address with each account. Static IP’s are necessary to run VPN’s and many Internet-based services',
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

export default FaqComponent