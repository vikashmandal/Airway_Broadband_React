import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqGeneral = () => {

  const FaqQuestions = [
    {
      id: 1,
      question: ' How many computers can I connect to the Commercial Service?',
      answer: ' With our commercial service, there is no limit on how many computers you can connect to the system. For more help sizing your network, contact sales.',
    },
    {
      id: 2,
      question: ' Can I share the Internet connection with the rest of the computers in my office?',
      answer: 'Yes, Our service was designed with multiple computer connections in mind. Our service is symmetrical (same upload as download) which provides a reliable Internet computing environment for businesses. ',
    },
    {
      id: 3,
      question: ' Does rain or other weather conditions affect service?',
      answer: ' Our network is designed to withstand the effect of rain on Wi-Fi signals. We provide a 99.99% uptime.',
    },
    {
      id: 4,
      question: ' What other equipment is needed?',
      answer: ' All a customer will need to connect our service is a firewall or router to secure its own network. The equipment and cables necessary to bring the connection into your building are provided by Airway Broadband.',
    },
    {
      id: 5,
      question: ' Can I run a server on this connection ?',
      answer: ' Yes, Clients can run any number of servers through Key West Broadband’s Internet service.',
    },
    {
      id: 6,
      question: '  Is there a long term contract?',
      answer: 'Airway Broadband offers contracts from 12 months to 36 months with discounts for the longer term contracts.When I moved here broadband was not as important as it is now and if I had to do without it today I would really struggle. Which is much faster. Airway broadband is absolutely a lifeline for me and many others. It works extremely well. ',
    },
    {
      id: 7,
      question: '  Is a contract required?',
      answer: 'No, Any changes made to an account must be put in writing. The installation fee is non-refundable, regardless of length of time of service. ',
    },
    {
      id: 8,
      question: '  Can I use more than one desktop computer or laptop at my home/ business ?',
      answer: 'Yes, A router is required to share the signal with more than one computer. A router may be purchased at any comp ',
    },
  {
    id: 9,
    question: ' Is Radio wave dangerous to our health?',
      answer: ' No, Radio wave is an electromagnetic wave flow in the air trough wall, glass and other material, it has lower power than cellular phone’s signal and high voltage electrical cable.Network Interface Card(NIC) with 10/100 Mbps Ethernet port with RJ45 socket',
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

export default FaqGeneral