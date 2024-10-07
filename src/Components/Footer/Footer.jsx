import React from 'react'
import './footer.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    const [date, setDate] = useState(getCurrentDate());

    function getCurrentDate() {
        const now = new Date();
        return `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(getCurrentDate());
        }, 86400000); // Update daily

        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <div className="copyright">
                <div className='social-links'>
                    <img className='footer-logo-1' src="https://www.airwaybroadband.com/images/logo.png" alt="" />
                    <img className='footer-logo-2' src="logo.png" alt="" />
                    <div className="footer-social-links-icon">


                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <div className="footer-google-review">
                    <Link to='https://www.google.com/search?hl=en-IN&gl=in&q=Pc+Care+Airway+Infratel+Private+Ltd.,+23,+Viveka+Nand+Colony,+University+Road+Near+Silver+Estate,+Gwalior,+Madhya+Pradesh+474011&ludocid=1328029959642659421&lsig=AB86z5XpHAchI1zJx1mTiIY43ecI#lrd=0x3976c4013fc14a47:0x126e1c364b93ba5d,3' target='_blank'>
                    <img src="	https://www.airwaybroadband.com/img/google-review.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Plan tariff</li>
                            <li>Faq</li>
                            <li>Customer care</li>
                            <li>Download</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Sitemap</li>
                            <li>Career</li>
                            <li>Network Presence</li>
                            <li>Terms of Website use</li>
                            <li>Privacy and Cookies Notice</li>
                            <li>News and Media</li>
                            <li>Promotion & Offers</li>
                            <li>Discount/Refund Policy</li>
                            <li>Legal</li>
                            <li>Testimonials</li>

                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Apply New Connection</li>
                            <li>Lodge Complaint</li>
                            <li>Check Speed</li>
                            <li>Bill Payment</li>
                            <li>Self Care Portal</li>
                            <li>Referral Programme</li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className="visitors">
                <div>
                    <h4>Total Visitors</h4>
                    <p>
                        <span>96677</span>
                    </p>
                </div>
                <div>
                    <h4>Last updated on:</h4>
                    <p>
                        <span>{date}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer