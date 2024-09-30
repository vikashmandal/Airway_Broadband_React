import React from 'react'
import './about.scss'

const About = () => {
    return (
        <section className='about'>
            <span  style={{color:`var(--bright-red-color)`}} className='red'>Know everything about us</span>
            <h2>About Airway Broadband</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt adipisci quis placeat id impedit!</span>
            <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="" />
            <p className='para'>Airway Broadband is the most affordable high speed broadband service you can find. No more complicated calculations. Now you can enjoy unlimited internet usage with absolutely no hidden cost. A wireless technology connection up to your home & office makes the installation quick and hassle free. A rooftop Airway CPE (Customer Premises Equipment) receives the wireless signal from our nearby AP-BTS and leads to a safe and reliable wired connection to your PC or laptop.

                "Airway Broadband" and "FiberOne" Broadband are service brand name facilitated and initiated by PC Care Airway Infratel Private Limited, Gwalior-M.P. under Unified ISP Class-C License issued by Department of Telecommunication (DOT), Ministry of Communication, and Government of India.</p>




        </section>
    )
}

export default About