import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqTechnology = () => {

  const FaqQuestions = [
    {
      id: 1,
      question: ' What is Fixed Wireless Broadband?',
      answer: 'Fixed wireless broadband is a method of delivering high speed data utilizing a Fixed Wi-Fi connection between two fixed points. Airway Broadband owns and operates the largest independent wireless broadband network in the Gwalior. Airway Broadband eliminates the Wireless Internet Service Provider (WISP) hold Class-A ISP License in India. All IP traffic is transported over our own Wi-Fi network utilizing high capacity Wi-Fi technology end to end. ',
    },
    {
      id: 2,
      question: '  How is Airway Broadband’s Fixed Wireless Broadband service provided?',
      answer: 'Airway Broadband installs a Wi-Fi CPE (Outdoor Microwave transceiver) on the roof or exterior of our customer’s building. We then extend an Ethernet CAT 5e network cable from this CPE down to the customer premise for connectivity into the customer’s network. ',
    },
    {
      id: 3,
      question: ' How reliable is the Airway Broadband fixed Wi-Fi (Wireless) technology?',
      answer: 'Our technology use a fixed beam or transmission from one radio to another as opposed to the wireless technologies that support the mobility of a cell phone, those technologies can lose connectivity when mobile or going from cell site to cell site. Airway Broadband uses Deliberants, Radmax, and Ubiquiti, technology- fixed wireless systems that support ranges of approximately 5 Km or less and never changes or moves. This provides greater reliability and allows Airway Broadband to provide a 99.99% uptime. ',
    },
    {
      id: 4,
      question: 'How fast is Airway Broadband Service? (and how is Airway Broadband different from DSL or Cable?)',
      answer: 'We provide our customers with dedicated connections that provide speeds of 512 Kbps (kilo bit per second) to 10 Mbps (mega bit per second). DSL connections are "best effort" type technologies and do not provide a consistent or fixed bandwidth. The speed of the DSL connection varies widely from location to location and even by time of day as more or less customers get on the network. ',
    },
    {
      id: 5,
      question: ' Is Airway Broadband faster than DSL?',
      answer: 'Yes, Airway Broadband’s service is guaranteed fast. Our network is symmetrical and Airway Broadband gives you the flexibility to increase service levels in the future. Businesses today need fast access for both upload and download, DSL connections do not support symmetrical access, providing only a minimal upload speed and inconsistent download speeds. Slow upload speeds from DSL make it difficult to run VPN’s, remote video monitoring, Web servers, and other Internet applications. ',
    },
    {
      id: 6,
      question: ' As my business grows and our broadband needs increase, can I change my connection speed?',
      answer: ' Yes, If you need to upgrade your connection, simply gives us a call. We can implement the speed upgrade within 24 hours.',
    },
    {
      id: 7,
      question: ' Is Wi-Fi Technology the same as satellite?',
      answer: 'No, Although the installation looks similar and employs a small antenna on the roof, Airway Broadband provides a local microwave service. Unlike satellite which transmits into space, we are transmitting only a few miles, also the latency and throughput speeds on Airway Broadband are much quicker than satellite. ',
    },
    {
      id: 8,
      question: '  Are Airway Broadband’s wireless data transmissions secured?',
      answer: '(Short answer) Yes, Airway Broadband’s network provides over-the-air encryption, which cryptographically scrambles the data bits, preventing anyone "listening" to the airwaves from deciphering any messages. In fact, Airway Broadband’s over-the-air link may be the most secure leg of a user’s Internet connection, even more so than a wired provider’s network. One of the biggest issues surrounding the Internet is security. The term "wireless" immediately raises questions on the security of the system. Most consumers have experienced the unintentional interception of portable phone signals and cellular phone signals and equate this to wireless. Explain, in layman’s terms, how Airway Broadband’s Wi-Fi technology addresses these problems. (Long answer) First, unlike analog telephone transmissions, digital transmissions of Internet traffic are much more difficult to intercept because of the complex cryptology associated with the technology. Second, like other Internet applications such as secure email or web browsing, users can employ many security applications which prevent eavesdropping on transmissions - whether such security applications are installed on the last-mile link to the user’s house or elsewhere in the Internet. Third, Airway Broadband’s fixed Wi-Fi system provides an over-the-air encryption, which cryptographically scrambles the data bits, preventing anyone "listening" to the airwaves from deciphering any messages. In fact, the microwave system’s over-the-air link may be the most secure leg of the typical user’s Internet connection. ',
    },
    {
      id: 9,
      question: '  Is Key West Broadband’s wireless as reliable as service from a airway provider?',
      answer: ' Yes...!',
    },

    {
      id: 10,
      question: '  How reliable is the Airway Broadband fixed Wi-Fi (Wireless) technology?',
      answer: ' Our technology use a fixed beam or transmission from one radio to another as opposed to the wireless technologies that support the mobility of a cell phone, those technologies can lose connectivity when mobile or going from cell site to cell site. Airway Broadband uses Deliberants, Radmax, and Ubiquiti, technology- fixed wireless systems that support ranges of approximately 5 Km or less and never changes or moves. This provides greater reliability and allows Airway Broadband to provide a 99.99% uptime.',
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

export default FaqTechnology