"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  "/test/test1.png",
  "/test/test2.png",
  "/test/test3.png",
  "/test/test4.png",
  "/test/test5.png",
  "/test/test6.png",
  "/test/test7.png",
  "/test/test8.png",
  "/test/test9.png",
  "/test/test11.png",
  "/test/test12.png",
  "/test/test13.png",
  "/test/test14.png",
  "/test/test15.png",
];

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div
      id="testimonials"
      className="relative z-50 border-t mb-12 lg:mb-24 mt-4 lg:mt-8 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex flex-col gap-3 items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md block">
            Some Testimonial
          </span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md block">
            What Client Say About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-6">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
        >
          {images.map((image, index) => (
            <div key={index} className="px-2 rounded-3xl">
              <img
                src={image}
                alt={`testimonial-${index}`}
                className="w-full h-[200px] object-contain rounded-3xl border-2 border-white"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
