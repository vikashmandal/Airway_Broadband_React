import React from 'react'
import Slider from './HomePageInnerComponents/Slider/Slider'
import About from '../About us/About'
// import Glance from '../../HomePageInnerComponents/Slider/Glance/Glance'
import HomeProductService from './HomePageInnerComponents/HomeProductService/HomeProductService'
// import Glance from '../../HomePageInnerComponents/Glance/Glance'
import HomeFacts from './HomePageInnerComponents/HomeFacts/HomeFacts'
import Footer from '../../Components/Footer/Footer'
import PlaceNameSlider from './HomePageInnerComponents/PlaceNameSlider/PlaceNameSlider'
// import SalesChatNum from '../../HomePageInnerComponents/ChatNum/SuppportChatNum'
import SupportChatNum from './HomePageInnerComponents/ChatNum/SuppportChatNum'
import SalesChatNum from './HomePageInnerComponents/ChatNum/SalesChatNum'
import Glance from './HomePageInnerComponents/Glance/Glance'
import ChatIcon from './HomePageInnerComponents/ChatIcon/ChatIcon'





const Home = () => {
  return (
    <div>
      <ChatIcon/>
      <Slider/>
      <About/>
      <Glance/>
      <SalesChatNum/>
      <HomeProductService/>
      <SupportChatNum/>
      <HomeFacts/>
      <PlaceNameSlider/>

      
    </div>
  )
}

export default Home