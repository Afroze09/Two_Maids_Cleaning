import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CustomCarousel() {
  return (
    <Carousel controls={false} indicators={false}>
       <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-1.webp"
          alt="First Slide"
        />
      </Carousel.Item>
       <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-2.webp"
          alt="Second Slide"
        />
      </Carousel.Item>
       <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670256610/hubsite-reskin/TwoMaids_9.webp"
          alt="Third Slide"
        />
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670256609/hubsite-reskin/TwoMaids_11.webp" className="d-block w-100" alt="Fourth Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670341303/hubsite-reskin/slider-image-5.webp" className="d-block w-100" alt="Fifth Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_east,h_900,q_auto,w_1920/v1670340679/hubsite-reskin/slider-image-6.webp" className="d-block w-100" alt="Sixth Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,h_900,q_auto,w_1920/v1670340683/hubsite-reskin/slider-image-7.webp" className="d-block w-100" alt="Seventh Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670340684/hubsite-reskin/slider-image-8.webp" className="d-block w-100" alt="Eighth Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670340671/hubsite-reskin/slider-image-9.webp" className="d-block w-100" alt="Nineth Slide" />
      </Carousel.Item>
        <Carousel.Item interval={2000}>
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto,w_1920/v1670256612/hubsite-reskin/GettyImages-1185315591.webp" className="d-block w-100" alt="Tenth Slide" />
      </Carousel.Item>
    </Carousel>
  );
}

{/* <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-1.webp" className="d-block w-100" alt="First Slide" />
    </div>
    <div className="carousel-item  ">
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-2.webp" className="d-block w-100" alt="Second Slide" />
    </div>
    <div className="carousel-item  ">
      <img src="https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670256610/hubsite-reskin/TwoMaids_9.webp" className="d-block w-100" alt="Third Slide" />
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel-item  ">
     
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel-item  ">
      
    </div>
  </div> */}