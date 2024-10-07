import React from 'react';
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';


const Navbar = () => {


  // State to manage sidebar visibility
  // const [sidenav, setSidenav] = useState(0);

  // Function to toggle sidebar visibility
  // const toggleSidenavOpen = () => {
  //   setSidenav(sidenav + 50);
  //   };
  const [sidenav, setSidenav] = useState(false); // Change to boolean for simplicity


  const toggleSidenavClose = () => {
    setSidenav(sidenav - 50);
  };

  const toggleSidenavOpen = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  const toggleSidenav = () => {
    setSidenav(!sidenav);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isPlanTariffDropdownOpen, setIsPlanTariffDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img className='logo-1' src="https://www.airwaybroadband.com/images/logo.png" alt="Logo" />
          <img className='logo-2' src="./logo.png" alt="Logo" />
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>

          <li onClick={() => setProductsDropdownOpen(!isProductsDropdownOpen)}>
            <Link to="/Products">Products</Link>
            <ul className={`drop-menu ${isProductsDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Fixed Wi-Fi Broadband</Link></li>
              <li><Link to="/">Broadband on Ethernet</Link></li>
              <li><Link to="/">Direct Internet Access (DIA)</Link></li>
            </ul>
          </li>

          <li onClick={() => setSolutionsDropdownOpen(!isSolutionsDropdownOpen)}>
            <Link to="/Solutions">Solutions</Link>
            <ul className={`drop-menu ${isSolutionsDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Business Broadband</Link></li>
              <li><Link to="/">Home Broadband</Link></li>
              <li><Link to="/">Building Enrollment</Link></li>
              <li><Link to="/">EDU-NET Solution</Link></li>
              <li><Link to="/">FTTx Fiber Broadband</Link></li>
            </ul>
          </li>

          <li onClick={() => setPlanTariffDropdownOpen(!isPlanTariffDropdownOpen)}>
            <Link to="/PlanTariff">Plan Tariff</Link>
            <ul className={`drop-menu ${isPlanTariffDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Home User Segment</Link></li>
              <li><Link to="/">Business User Segment</Link></li>
              <li><Link to="/">Direct Internet Access (DIA)</Link></li>
            </ul>
          </li>

          <li><Link to="/Faq">FAQ</Link></li>
          <li><Link to="/CustomerCare">Customer Care</Link></li>

          <li onClick={() => setMegaOpen(!isMegaOpen)}>
            <Link to="">
              Download
              <div className={`mega-box ${isMegaOpen ? 'active' : ''}`}>
                <div className="content">
                  <div className="row">
                    <header>Plans Tariff & Charges Sheet</header>
                    <ul className="mega-links">
                      <li><Link to="/">Airway Home User Plan Sheet</Link></li>
                      <li><Link to="/">Airway Business User Plan Sheet</Link></li>
                      <li><Link to="/">Other Charges Sheet (Airway)</Link></li>
                      <li><Link to="/">Spares Price List (Airway)</Link></li>
                      <li><Link to="/">Plan Comparison Sheet (Residential User)</Link></li>
                      <li><Link to="/">Plan Comparison Sheet (Business User)</Link></li>
                      <li><Link to="/">Data Refill Top Up Pack (Home/SME)</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Connection Application Forms</header>
                    <ul className="mega-links">
                      <li><Link to="/">Subscriber Application Form (Residential)</Link></li>
                      <li><Link to="/">Subscriber Application Form (Business/SME)</Link></li>
                      <li><Link to="/">DIA Lease Line Application Form</Link></li>
                      <li><Link to="/">Local Loop Business Application Form</Link></li>
                      <li><Link to="/">Required Document List (New Connection)</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Request Forms</header>
                    <ul className="mega-links">
                      <li><Link to="/">Plan Migration Request Form</Link></li>
                      <li><Link to="/">Connection Shifting Request Form</Link></li>
                      <li><Link to="/">Complaint Registration Request Form</Link></li>
                      <li><Link to="/">Connection Disconnect Request Form</Link></li>
                      <li><Link to="/">Connection Migration Request Form (Fttx)</Link></li>
                      <li><Link to="/">Fixed Static IP (Public) Request Form</Link></li>
                      <li><Link to="/">GST Data Update Form</Link></li>
                      <li><Link to="/">Connection Reactivation Request Form</Link></li>
                      <li><Link to="/">Landlord Approval Request Form</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Help & Support Documents</header>
                    <ul className="mega-links">
                      <li><Link to="/">Complaint Via SMS & Whatsapp Making Process Sheet</Link></li>
                      <li><Link to="/">Complaint Via Voice Call Making Process Sheet</Link></li>
                      <li><Link to="/">Complaint Via Email Making Process Sheet</Link></li>
                      <li><Link to="/">Bill Payment Process Sheet</Link></li>
                      <li><Link to="/">Complaint Escalation Matrix Sheet (DIA & Business Broadband)</Link></li>
                      <li><Link to="/">Complaint To Nodal Officer Format</Link></li>
                      <li><Link to="/">Complaint To Appeal Authority Format</Link></li>
                      <li><Link to="/">Standard Operating Process (SOP)</Link></li>
                      <li><Link to="/">Company Formation Chart (All Department)</Link></li>
                      <li><Link to="/">Citizen & Consumer Charter</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Other Document Format</header>
                    <ul className="mega-links">
                      <li><Link to="/">Self Declaration Form</Link></li>
                      <li><Link to="/">Letter of Authorised Signatory (MS-Word)</Link></li>
                      <li><Link to="/">Business</Link></li>
                      <li><Link to="/">Landlord Declaration & Approval Form (MS-Word)</Link></li>
                      <li><Link to="/">GST Non-Availability Declaration Format (MS-Word)</Link></li>
                      <li><Link to="/">Address Proof Declaration Format (MS-Word)</Link></li>
                      <li><Link to="/">Equipments (CPE) Return Consent Format Corporate (MS-Word)</Link></li>
                      <li><Link to="/">Pre Customer Information Sheet (MS-Word)</Link></li>
                      <li><Link to="/">Fiber DP Installation Report Format (MS-Word)</Link></li>
                      <li><Link to="/">DIA (Internet Lease Line) Closer Report Format (MS-Word)</Link></li>
                      <li><Link to="/">Internet Lease Line (DIA) Inspection Report Format (MS-Word)</Link></li>
                      <li><Link to="/">Township Equipment (CPE) Return Consent Format</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Fiber)</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Wireless)</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Copper & Ethernet)</Link></li>
                      <li><Link to="/">Fiber ONU/ONT/MODEM Type Detail</Link></li>
                      <li><Link to="/">Service Level Agreement-SLA Format (Internet Lease Line)</Link></li>
                      <li><Link to="/">Service Level Agreement-SLA Format (Business Broadband)</Link></li>
                      <li><Link to="/">New Connection Inquiry Form</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>White Paper & Tutorial</header>
                    <ul className="mega-links">
                      <li><Link to="/">How it Works (FiberOne Fttx Broadband)</Link></li>
                      <li><Link to="/">How it Works (Airway Wireless Broadband)</Link></li>
                      <li><Link to="/">Factsheet (FiberOne Fttx Broadband)</Link></li>
                      <li><Link to="/">Factsheet (Airway Wireless Broadband)</Link></li>
                    </ul>
                  </div>


                  <div className="row">
                    <header>Help & Support Documents</header>
                    <ul className="mega-links">
                      <li><Link to="/">Factsheet (Internet Lease Line Service)</Link></li>
                      <li><Link to="/">Factsheet (Business Broadband Service)</Link></li>
                      <li><Link to="/">Advantages of Internet Lease Line</Link></li>
                      <li><Link to="/">Advantages of Business Broadband</Link></li>
                      <li><Link to="/">Symmetric & Asymmetric Speed Difference</Link></li>
                      <li><Link to="/">Fair Usage Policy</Link></li>
                      <li><Link to="/">Acceptable Usage Policy</Link></li>
                      <li><Link to="/">Company Profile (Vision/Mission)</Link></li>
                      <li><Link to="/">Company Social Responsibility</Link></li>
                      <li><Link to="/">Company Environment Policy</Link></li>
                      <li><Link to="/">Calculation Download Speed</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Brochure</header>
                    <ul className="mega-links">
                      <li><Link to="/">Airway Broadband Brochure</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>DOT ISP License & Circular</header>
                    <ul className="mega-links">
                      <li><Link to="/">TRAI Broadband Quality Policy</Link></li>
                      <li><Link to="/">DOT ISP License Copy</Link></li>
                      <li><Link to="/">Telecom Consumer Protection Circular</Link></li>
                      <li><Link to="/">Telecom Consumers Complaint Redressal Regulations Act 2012</Link></li>
                      <li><Link to="/">Wi-Fi Service Uses Direction From DOT</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>



        <div style={{ cursor: 'pointer' }} onClick={toggleSidenavOpen} className="nav-menu">
          {/* Conditionally render the Menu or Close icon */}
          {isMenuOpen ? <Close className='nav-menu-icon' /> : <Menu className='nav-menu-icon' />}
        </div>
      </div>



      {/* Sidenav for sm screen */}
      <div

        className={sidenav ? 'sidenav active' : 'sidenav'}>







<ul className={`sm-nav-links ${sidenav ? 'active' : ''}`}>

          

          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>

          <li onClick={() => setProductsDropdownOpen(!isProductsDropdownOpen)}>
            <Link to="/Products">Products</Link>
            <ul className={`drop-menu ${isProductsDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Fixed Wi-Fi Broadband</Link></li>
              <li><Link to="/">Broadband on Ethernet</Link></li>
              <li><Link to="/">Direct Internet Access (DIA)</Link></li>
            </ul>
          </li>

          <li onClick={() => setSolutionsDropdownOpen(!isSolutionsDropdownOpen)}>
            <Link to="/Solutions">Solutions</Link>
            <ul className={`drop-menu ${isSolutionsDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Business Broadband</Link></li>
              <li><Link to="/">Home Broadband</Link></li>
              <li><Link to="/">Building Enrollment</Link></li>
              <li><Link to="/">EDU-NET Solution</Link></li>
              <li><Link to="/">FTTx Fiber Broadband</Link></li>
            </ul>
          </li>

          <li onClick={() => setPlanTariffDropdownOpen(!isPlanTariffDropdownOpen)}>
            <Link to="/PlanTariff">Plan Tariff</Link>
            <ul className={`drop-menu ${isPlanTariffDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/">Home User Segment</Link></li>
              <li><Link to="/">Business User Segment</Link></li>
              <li><Link to="/">Direct Internet Access (DIA)</Link></li>
            </ul>
          </li>

          <li><Link to="/Faq">FAQ</Link></li>
          <li><Link to="/CustomerCare">Customer Care</Link></li>

          <li onClick={() => setMegaOpen(!isMegaOpen)}>
            <Link to="/">
              Download
              <div className={`mega-box ${isMegaOpen ? 'active' : ''}`}>
                <div className="content">
                  <div className="row">
                    <header>Plans Tariff & Charges Sheet</header>
                    <ul className="mega-links">
                      <li><Link to="/">Airway Home User Plan Sheet</Link></li>
                      <li><Link to="/">Airway Business User Plan Sheet</Link></li>
                      <li><Link to="/">Other Charges Sheet (Airway)</Link></li>
                      <li><Link to="/">Spares Price List (Airway)</Link></li>
                      <li><Link to="/">Plan Comparison Sheet (Residential User)</Link></li>
                      <li><Link to="/">Plan Comparison Sheet (Business User)</Link></li>
                      <li><Link to="/">Data Refill Top Up Pack (Home/SME)</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Connection Application Forms</header>
                    <ul className="mega-links">
                      <li><Link to="/">Subscriber Application Form (Residential)</Link></li>
                      <li><Link to="/">Subscriber Application Form (Business/SME)</Link></li>
                      <li><Link to="/">DIA Lease Line Application Form</Link></li>
                      <li><Link to="/">Local Loop Business Application Form</Link></li>
                      <li><Link to="/">Required Document List (New Connection)</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Request Forms</header>
                    <ul className="mega-links">
                      <li><Link to="/">Plan Migration Request Form</Link></li>
                      <li><Link to="/">Connection Shifting Request Form</Link></li>
                      <li><Link to="/">Complaint Registration Request Form</Link></li>
                      <li><Link to="/">Connection Disconnect Request Form</Link></li>
                      <li><Link to="/">Connection Migration Request Form (Fttx)</Link></li>
                      <li><Link to="/">Fixed Static IP (Public) Request Form</Link></li>
                      <li><Link to="/">GST Data Update Form</Link></li>
                      <li><Link to="/">Connection Reactivation Request Form</Link></li>
                      <li><Link to="/">Landlord Approval Request Form</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Help & Support Documents</header>
                    <ul className="mega-links">
                      <li><Link to="/">Complaint Via SMS & Whatsapp Making Process Sheet</Link></li>
                      <li><Link to="/">Complaint Via Voice Call Making Process Sheet</Link></li>
                      <li><Link to="/">Complaint Via Email Making Process Sheet</Link></li>
                      <li><Link to="/">Bill Payment Process Sheet</Link></li>
                      <li><Link to="/">Complaint Escalation Matrix Sheet (DIA & Business Broadband)</Link></li>
                      <li><Link to="/">Complaint To Nodal Officer Format</Link></li>
                      <li><Link to="/">Complaint To Appeal Authority Format</Link></li>
                      <li><Link to="/">Standard Operating Process (SOP)</Link></li>
                      <li><Link to="/">Company Formation Chart (All Department)</Link></li>
                      <li><Link to="/">Citizen & Consumer Charter</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Other Document Format</header>
                    <ul className="mega-links">
                      <li><Link to="/">Self Declaration Form</Link></li>
                      <li><Link to="/">Letter of Authorised Signatory (MS-Word)</Link></li>
                      <li><Link to="/">Business</Link></li>
                      <li><Link to="/">Landlord Declaration & Approval Form (MS-Word)</Link></li>
                      <li><Link to="/">GST Non-Availability Declaration Format (MS-Word)</Link></li>
                      <li><Link to="/">Address Proof Declaration Format (MS-Word)</Link></li>
                      <li><Link to="/">Equipments (CPE) Return Consent Format Corporate (MS-Word)</Link></li>
                      <li><Link to="/">Pre Customer Information Sheet (MS-Word)</Link></li>
                      <li><Link to="/">Fiber DP Installation Report Format (MS-Word)</Link></li>
                      <li><Link to="/">DIA (Internet Lease Line) Closer Report Format (MS-Word)</Link></li>
                      <li><Link to="/">Internet Lease Line (DIA) Inspection Report Format (MS-Word)</Link></li>
                      <li><Link to="/">Township Equipment (CPE) Return Consent Format</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Fiber)</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Wireless)</Link></li>
                      <li><Link to="/">Last Mile Network Diagram (Copper & Ethernet)</Link></li>
                      <li><Link to="/">Fiber ONU/ONT/MODEM Type Detail</Link></li>
                      <li><Link to="/">Service Level Agreement-SLA Format (Internet Lease Line)</Link></li>
                      <li><Link to="/">Service Level Agreement-SLA Format (Business Broadband)</Link></li>
                      <li><Link to="/">New Connection Inquiry Form</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>White Paper & Tutorial</header>
                    <ul className="mega-links">
                      <li><Link to="/">How it Works (FiberOne Fttx Broadband)</Link></li>
                      <li><Link to="/">How it Works (Airway Wireless Broadband)</Link></li>
                      <li><Link to="/">Factsheet (FiberOne Fttx Broadband)</Link></li>
                      <li><Link to="/">Factsheet (Airway Wireless Broadband)</Link></li>
                    </ul>
                  </div>


                  <div className="row">
                    <header>Help & Support Documents</header>
                    <ul className="mega-links">
                      <li><Link to="/">Factsheet (Internet Lease Line Service)</Link></li>
                      <li><Link to="/">Factsheet (Business Broadband Service)</Link></li>
                      <li><Link to="/">Advantages of Internet Lease Line</Link></li>
                      <li><Link to="/">Advantages of Business Broadband</Link></li>
                      <li><Link to="/">Symmetric & Asymmetric Speed Difference</Link></li>
                      <li><Link to="/">Fair Usage Policy</Link></li>
                      <li><Link to="/">Acceptable Usage Policy</Link></li>
                      <li><Link to="/">Company Profile (Vision/Mission)</Link></li>
                      <li><Link to="/">Company Social Responsibility</Link></li>
                      <li><Link to="/">Company Environment Policy</Link></li>
                      <li><Link to="/">Calculation Download Speed</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Brochure</header>
                    <ul className="mega-links">
                      <li><Link to="/">Airway Broadband Brochure</Link></li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>DOT ISP License & Circular</header>
                    <ul className="mega-links">
                      <li><Link to="/">TRAI Broadband Quality Policy</Link></li>
                      <li><Link to="/">DOT ISP License Copy</Link></li>
                      <li><Link to="/">Telecom Consumer Protection Circular</Link></li>
                      <li><Link to="/">Telecom Consumers Complaint Redressal Regulations Act 2012</Link></li>
                      <li><Link to="/">Wi-Fi Service Uses Direction From DOT</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>







      </div>
    </nav>

  );
};

export default Navbar;
