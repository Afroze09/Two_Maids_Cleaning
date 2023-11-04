import React from "react";
import { Carousel } from "react-bootstrap";
const corouselImg = [
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-1.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto:eco,w_1920/v1696521709/hubsite-reskin/slider-image-2.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670256610/hubsite-reskin/TwoMaids_9.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670256609/hubsite-reskin/TwoMaids_11.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670341303/hubsite-reskin/slider-image-5.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,h_900,q_auto,w_1920/v1670340683/hubsite-reskin/slider-image-7.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_east,h_900,q_auto,w_1920/v1670340679/hubsite-reskin/slider-image-6.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670340684/hubsite-reskin/slider-image-8.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_north,h_900,q_auto,w_1920/v1670340671/hubsite-reskin/slider-image-9.webp",
        "https://res.cloudinary.com/twomaidsengi/image/upload/c_fill,g_south,h_900,q_auto,w_1920/v1670256612/hubsite-reskin/GettyImages-1185315591.webp"
]
export default function CustomCarousel() {
  return (
    <div className="relative w-full">
      <Carousel controls={false} indicators={false} className="h-[90vh]">
      {
        corouselImg.map(v=>{
                return <Carousel.Item interval={2000}>
                        <img
                                className="d-block h-[90vh] w-100"
                                src={v}
                                alt="First Slide"
                        />
                        </Carousel.Item>
        })
      }
      </Carousel>
      <h1 className="text-9xl absolute top-20 font-normal left-[30%] text-white">Let Life Shine </h1>
      
    </div>
  );
}
