import React from 'react'
import Slider from '../../HomePageInnerComponents/Slider/Slider'
import About from '../About us/About'
// import Glance from '../../HomePageInnerComponents/Slider/Glance/Glance'
import HomeProductService from '../../HomePageInnerComponents/HomeProductService/HomeProductService'
import Glance from '../../HomePageInnerComponents/Glance/Glance'
import HomeFacts from '../../HomePageInnerComponents/HomeFacts/HomeFacts'

const Home = () => {
  return (
    <div>
      <Slider/>
      <About/>
      <Glance/>
      <HomeProductService/>
      <HomeFacts/>
    </div>
  )
}

export default Home