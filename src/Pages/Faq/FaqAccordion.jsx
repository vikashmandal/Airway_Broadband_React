import React, { useState } from 'react'
import './faq.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';


const FaqAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false)

    return (
        <div className='faq-accordion'>
            <div>
                <h3>{question}</h3>
                <div onClick={() => setShow(!show)} className='icon'>
                    {
                        show ? < FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />
                    }
                </div>
            </div>
            {show && <p className='para faq-answers'>{answer}</p>}

        </div>
    )
}

export default FaqAccordion