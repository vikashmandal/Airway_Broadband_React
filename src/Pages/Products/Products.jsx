import React from 'react'
import './products.scss'
import { useState } from 'react';

const Products = () => {


    const [heading, setHeading] = useState('Fixed Wi-Fi Broadband');
    const [paragraph, setParagraph] = useState('Airway Broadband service is wireless broadband which use Fixed Wireless technology and isn’t new. Radio-wave communication has been around for years. But what doesn’t get old is Fixed Wireless’ proven reliability, scalability, and speed. With Fixed Wireless you harness the performance of other enterprise solutions at budget friendly prices. Each installation is custom-built according to the unique signal-path conditions at your location. Even the weather is accounted for. So what’s keeping you from choosing a Fixed Wireless solution. Fixed Wireless Broadband provides an Internet connection via a wireless antenna system. An antenna is installed on your roof with an attached radio receiver/transmitter. This antenna is pointed at a nearby Access Point tower, and must have a clear line of sight (no trees, buildings, or hills blocking the path). When you send and receive information over the Internet, it goes over the wireless link from your radio/antenna to our Access Point. From there that information travels over our “backhaul,” which is a point-to-point wireless link to a fiber‐optic connection hooked directly to the Internet. Airway Broadband service has very low “latency” (or delay) compared to satellite Internet, where signals must travel thousands of miles into space.');


    // Click handler for h2
    const productLink1 = () => {
        setHeading('Fixed Wi-Fi Broadband');
        setParagraph('Airway Broadband service is wireless broadband which use Fixed Wireless technology and isn’t new. Radio-wave communication has been around for years. But what doesn’t get old is Fixed Wireless’ proven reliability, scalability, and speed. With Fixed Wireless you harness the performance of other enterprise solutions at budget friendly prices. Each installation is custom-built according to the unique signal-path conditions at your location. Even the weather is accounted for. So what’s keeping you from choosing a Fixed Wireless solution. Fixed Wireless Broadband provides an Internet connection via a wireless antenna system. An antenna is installed on your roof with an attached radio receiver/transmitter. This antenna is pointed at a nearby Access Point tower, and must have a clear line of sight (no trees, buildings, or hills blocking the path). When you send and receive information over the Internet, it goes over the wireless link from your radio/antenna to our Access Point. From there that information travels over our “backhaul,” which is a point-to-point wireless link to a fiber‐optic connection hooked directly to the Internet. Airway Broadband service has very low “latency” (or delay) compared to satellite Internet, where signals must travel thousands of miles into space.');
    };

    const productLink2 = () => {
        setHeading('Broadband on Ethernet');
        setParagraph('Airway Ethernet Broadband Service is an enterprise-grade broadband internet technology. It provides robust, high-speed data connectivity to cope with data-intensive applications such as: operating multiple IP voice lines, Virtual Private Networks (VPN), enterprise web hosting, file sharing and Local area Network (LAN) connectivity.Ethernet broadband is often considered a set up from ADSL broadband, offering data speeds that are typically faster than a regular DSL connection.Uniquely, Ethernet speeds are symmetrical(the same speed for upload and downloads) is distinc from Airway Broadband(which provides for downloads at higher speeds than uploads). Symmetrical speed can increase the performance of data - hungry services like IP communications and enterprise file sharing.')
    };

    const productLink3 = () => {
        setHeading('Direct Internet Access (DIA)');
        setParagraph('Data isn\'t available');
    };

    const productLink4 = () => {
        setHeading('Direct Internet Access Lease Line(DIA-LL)');
        setParagraph('Data isn\'t available');
    };


    return (
        <div className='product-container flex'>
            <div className="side-list">
                <ul>
                    <li onClick={productLink1}>Fixed Wi-Fi Broadband</li>
                    <li onClick={productLink2}>Broadband on Ethernet</li>
                    <li onClick={productLink3}>Direct Internet Access (DIA)</li>
                    <li onClick={productLink4}>Direct Internet Access Lease Line(DIA-LL)</li>
                </ul>

            </div>
            <div className='products'>
                <h2>{heading}</h2>
                <p className='para'>{paragraph}</p>
                <h2>How it is work?</h2>
                <img src="https://www.airwaybroadband.com/contactus/banner2.png" alt="" />


            </div>
        </div>
    )
}

export default Products