"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import ColourfulText from "@/components/ui/colourful-text";
// import { VelocityScroll } from "../magicui/scroll-based-velocity";


export default function Choose() {
  return (
    <div className="bg-black pb-10">

        <div>
            <h1 className="text-white text-center font-bold text-4xl">
                Why Choose Us
            </h1>
            <h1 className="text-white lg:max-w-[50rem] max-w-[20rem] m-auto mt-4 mb-4 text-center font-semibold lg:text-4xl text-3xl ">
                We deliver exciting, impactful results. Let&apos;s bring your <ColourfulText text="vision to life together!" /> 
            </h1>
        </div>
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-5xl md:text-2xl lg:text-7xl font-semibold tracking-[-0.015em] text-white">
            120+ Projects
          </h2>
          <p className="mt-4 text-left  lg:text-base/6 text-xl text-neutral-200">
             Over 400 successful projects delivered to our clients worldwide
          </p>
        </div>
        <Image
          src="/img5.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] lg:right-[-2rem]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-3xl md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          30 Awards
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-xl lg:text-base/6 text-neutral-200">
          Our outstanding work has earned us prestigious global awards and recognition. Our dedication to excellence, innovation, and creativity sets us apart, and we are honored to be
          celebrated on the world stage for our achievements
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:3xl text-xl lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="lg:max-w-lg max-w-sm mt-[-3rem]">
          <h2 className="lg:max-w-lg max-w-sm text:2xl md:max-w-lg lg:max-w-lg text-left md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Discover the future with our cutting-edge services! As a top web agency, we elevate your digital presence and performance. Sign up today and experience the difference!
          </h2>
          <p className="mt-4 max-w-[26rem] text-[16px] text-left lg:text-base/6 text-neutral-200">
              Boasting a 98% satisfaction rate across all our consulting services, we consistently deliver excellence and exceed expectations.
          </p>
        </div>
        <Image
          src="/img4.png"
          width={500}
          height={600}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:right-[3rem] h-[35rem] w-[40rem] mt-[-7rem] lg:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>


          {/* scroll text */}
          <div className="relative lg:mt-20 mt-20 lg:pb-20 pb-20 flex w-full flex-col items-center justify-center overflow-hidden">
                   {/* <VelocityScroll className="bg-white p-4 text-blue-500 ">     
                       WEB AGENCY, DIGITAL SOLUTIONS, WEB DEVELOPMENT, APP DEVELOPMENT, DIGITAL MARKETING, SEO,
                    </VelocityScroll> */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
            </div>
{/* ends */}
    </div>
  );
}
