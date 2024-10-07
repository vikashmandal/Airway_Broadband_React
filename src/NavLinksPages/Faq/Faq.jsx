import React from 'react'
import './faq.scss'
import { useState } from 'react'
import FAqNewConnection from './FAqNewConnection'
import FaqTechnology from './FaqTechnology'
import FaqGeneral from './FaqGeneral'
import FaqSupport from './FaqSupport'
import FaqBilling from './FaqBilling'
import FaqServiceSOP from './FaqServiceSOP'

const Faq = () => {

  // MAIN HEADING 
  const [heading, setHeading] = useState('New Connection');
  // CONTENT DATA
  const [currentContent, setCurrentContent] = useState(<FAqNewConnection />);

  const changeHeadingAndContent = (newHeading, content) => {
    setHeading(newHeading);
    setCurrentContent(content);
  };

  return (



    <div className='faq-section flex'>
      {/* <div className="side-list f-1">
        <ul className='h-100'>
          <li onClick={() => changeHeadingAndContent('New Connection ', <FAqNewConnection />)}>New Connection </li>
          <li onClick={() => changeHeadingAndContent('Technology', <FaqTechnology />)}>Technology</li>
          <li onClick={() => changeHeadingAndContent('General', <FaqGeneral />)}>General</li>
          <li onClick={() => changeHeadingAndContent('Support', <FaqSupport />)}>Support</li>
          <li onClick={() => changeHeadingAndContent('Billing', <FaqBilling />)}>Billing</li>
          <li onClick={() => changeHeadingAndContent('Service SOP', <FaqServiceSOP />)}>Service SOP</li>
        </ul>
      </div> */}
      <div className="faq f-4">
        <div className='odd'>
          <h2 className='h2'>{heading}</h2>
          {currentContent}
        </div>
        <div className='even'>

          <h2 className='h2'> Technology</h2>
          <FaqTechnology />
        </div>
        <div className='odd'>

          <h2 className='h2'> General</h2>
          <FaqGeneral />
        </div>
        <div className='even'>

          <h2 className='h2'> Support</h2>
          <FaqSupport />
        </div>
        <div className='odd'>

          <h2 className='h2'> Billing</h2>
          <FaqBilling />
        </div>
        <div className='even'>


          <h2 className='h2'>Service SOP</h2>
          <FaqServiceSOP />
        </div>

      </div>
    </div>
  )
}

export default Faq