import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <img src="https://www.airwaybroadband.com/images/logo.png" alt="" />
                <div className='social-links'>

                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-instagram"></i>
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
                        <span>21st Sep 2024</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer