import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqSupport = () => {

  const FaqQuestions = [
    {
      id: 1,
      question: '  How to maximize our bandwidth utilization?',
      answer: 'We provide Bandwidth Management Service which can manage your bandwidth usage to meet every user’s need.Contact our sales team for further information. ',
    },
    {
      id: 2,
      question: ' Why I am Able to connect to the network but unable to browse to internet websites; or experiencing very slow browsing speed?',
      answer: 'In "Control Panel" - "Network" - "Configuration", check if there are more than one TCP/IP components. If yes, remove the rest. ',
    },
    {
      id: 3,
      question: ' Why I got disconnected quite often ?',
      answer: 'Check your connection settings and if it still persist please do call on helpdesk. ',
    },
    {
      id: 4,
      question: ' My bandwidth utilization is full but I feel that I am not using that much connection. What should I do?',
      answer: ' Check for other computers in your Local Area Network, are they doing any heavy Internet activities such as file downloading, video streaming, etc. In many cases, this could caused by computer viruses and trojans etc. Control your bandwidth usage and regulary scan your computers with the latest antivirus updates.',
    },
    {
      id: 5,
      question: ' What should we do if the Internet connection feels slower than usual?',
      answer: 'Please check your bandwidth utilization, your Internet speed will be effected if your bandwidth utilization is full. ',
    },
    {
      id: 6,
      question: ' What are the necessary steps we have to take in case the connection is down?',
      answer: ' Please check your Servers and Routers, are they already on? Is your Ethernet cable plugged in correct position? Are your radio’s POE on? POE’s indicator led will light in green when it’s on.If they are in correct positions, you can try to restart the radio by unplug the POE adaptor, and wait for about 30 seconds before you plug it back.If the Internet connection is not restored, please call on our helpdesk Team.',
    },
  ]

  return (
    <div className='faq-component'>
      {
        FaqQuestions.map((faqquestion) => {
          return <FaqAccordion key={faqquestion.id} {...faqquestion} />


        })
      }
    </div>)
}

export default FaqSupport