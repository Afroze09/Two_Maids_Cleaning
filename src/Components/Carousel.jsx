import React from "react";
import { Carousel } from "react-bootstrap";
import { corouselImg } from "../utils";
import EventButton from "./EventButton";
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
      <h1 className="text-9xl absolute top-20 font-normal text-center left-0 right-0 text-white">Let Life Shine </h1>
      <EventButton className="absolute bottom-28 gap-x-8 left-0 right-0 mx-auto"/>
    </div>
  );
}
