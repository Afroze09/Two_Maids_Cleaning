import React from 'react'
import CustomCarousel from '../Components/Carousel'
import Ourservices from '../Components/Ourservices'
import Video from '../Components/video'
import Reviews from '../Components/Reviews'
import Modal from '../Components/Modal'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
    <section className='sm:h-[90vh] h-[75vh] w-screen'>
      <div className='bg-[#015d9c] h-full flex flex-col justify-evenly items-center px-2 py-10 sm:px-28 md:px-28 sm:py-20 md:py-20 text-white'>
        <div>
        <h1 className='sm:text-6xl text-4xl font-bold mb-3 tracking-widest leading-[1.2em] '>WELCOME TO THE <br /> KILLER CLEAN <br /> EXPERIENCE!</h1>
        <p className='text-xl'>Dirts worst nightmare.</p>
        </div>
        <Link to="/aboutus"><button className='btn event-btn mt-4 sm:mt-8' id='learn'>Learn More</button></Link>
      </div>
    </section>
      <CustomCarousel />
      <Ourservices />
      <Video />
      <Reviews />
      <Modal />
    </div>
  )
}
