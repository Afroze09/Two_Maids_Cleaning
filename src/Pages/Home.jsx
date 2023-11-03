import React from 'react'
import CustomCarousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Ourservices from '../Components/Ourservices'
import Video from '../Components/video'


export default function Home() {
  return (
    <div >
      <Navbar />
      <CustomCarousel />
      <Ourservices />
      <Video />
      <Footer/>
    </div>
  )
}
