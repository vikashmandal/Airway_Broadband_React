import React from 'react'
import './customercare.scss'
import { useState } from 'react';
import CustomerCareLink1 from './CustomerCareLink1';
import CustomerCareLink2 from './CustomerCareLink2';
import CustomerCareLink3 from './CustomerCareLink3';
import CustomerCareLink4 from './CustomercareLink4';
import CustomerCareLink6 from './CustomerCareLink6';
import CustomerCareLink5 from './CustomerCareLink5';
import { NavLink } from 'react-router-dom';

const CustomerCare = () => {


    // MAIN HEADING 
    const [heading, setHeading] = useState('Complaints');
    // CONTENT DATA
    const [currentContent, setCurrentContent] = useState(<CustomerCareLink1 />);

    const changeHeadingAndContent = (newHeading, content) => {
        setHeading(newHeading);
        setCurrentContent(content);
    };

    return (
        <div className='customer-care-section flex'>
            <div className="side-list f-1">
                <ul className='h-100'>


                    <li>
                        <NavLink
                        className={(isACtive) => `.active`}
                            onClick={() => changeHeadingAndContent('Complaints ', <CustomerCareLink1 />)}
                        >
                            Complaints
                        </NavLink>
                    </li>

                    <li onClick={() => changeHeadingAndContent('Escalation Matrix', <CustomerCareLink2 />)}>Escalation Matrix</li>
                    <li onClick={() => changeHeadingAndContent('Citizen Charter', <CustomerCareLink3 />)}>Citizen Charter</li>
                    <li onClick={() => changeHeadingAndContent('Consumer Charter', <CustomerCareLink4 />)}>Consumer Charter</li>
                    <li onClick={() => changeHeadingAndContent('Nodal Officer', <CustomerCareLink5 />)}>Nodal Officer</li>
                    <li onClick={() => changeHeadingAndContent('Appeal Authority', <CustomerCareLink6 />)}>Appeal Authority</li>
                </ul>
            </div>
            <div className="customer-care-data f-4">
                <h2 className='h2'>{heading}</h2>
                {currentContent}

            </div>

        </div>)
}

export default CustomerCare