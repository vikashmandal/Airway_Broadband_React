import React from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="https://www.airwaybroadband.com/images/logo.png" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to='/'>
                        Home
                    </Link></li>
                    <li>
                        <Link to='/About'>
                            About us
                        </Link>
                    </li>
                    <li><Link to='/Products'>
                        Products
                    </Link></li>
                    <li><Link to='/Solutions'>
                        Solutions
                    </Link></li>
                    <li><Link to='/PlanTariff'>
                        Plan tariff
                    </Link></li>
                    <li><Link to='/Faq'>
                        Faq
                    </Link></li>
                    <li><Link to='/CustomerCare'>
                        Customer care
                    </Link></li>
                    <li><Link to='/Download'>
                        Download
                    </Link></li>
                    <li><Link to='/Gallery'>
                        Gallery
                    </Link></li>
                    <li><Link to='/Contact'>
                        Contact
                    </Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar