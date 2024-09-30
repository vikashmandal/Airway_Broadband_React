import React from 'react'
import { useState } from 'react';
import './contact.scss'
import AccountsAndBilling from './AccountsAndBilling';
import ComplaintAndCustomerCare from './ComplaintAndCustomerCare';
import ContactUs from './ContactUs';
import SalesAndGeneralEnquiry from './SalesAndGeneralEnquiry';
import ContactData from './ContactData';


const Contact = () => {

  // MAIN HEADING 
  const [heading, setHeading] = useState('Contact Us');
  // CONTENT DATA
  const [currentContent, setCurrentContent] = useState(<ContactData />);

  const changeHeadingAndContent = (newHeading, content) => {
    setHeading(newHeading);
    setCurrentContent(content);
  };



  return (


    <div className='contact-container flex '>

      <div className="side-list f-1 ">
        <ul className='h-100'>
          <li onClick={() => changeHeadingAndContent('Contact Us', <ContactUs />)}>Contact Us</li>
          <li onClick={() => changeHeadingAndContent('Sales & General Inquiry', <SalesAndGeneralEnquiry />)}>Sales & General Inquiry</li>
          <li onClick={() => changeHeadingAndContent('Complains & Customer Care', <ComplaintAndCustomerCare />)}>Complains & Customer Care</li>
          <li onClick={() => changeHeadingAndContent('Accounts & Billing', <AccountsAndBilling />)}>Accounts & Billing</li>
        </ul>
      </div>

      <div className="contact f-4">

        <div className='contact-form'>
          <h2 className='h2'>{heading}</h2>

          <div style={{ width: `70%` }}>{currentContent}</div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Contact