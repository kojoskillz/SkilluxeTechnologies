"use client";
 
import { cn } from "@/lib/utils";
import { DotPattern } from "../magicui/dot-pattern";
// import { AuroraText } from "../magicui/aurora-text";
import { PulsatingButton } from "../magicui/pulsating-button";
import ColourfulText from "@/components/ui/colourful-text";

import { motion } from "motion/react";


import React from 'react'



const Homepage = () => {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-black">
    <DotPattern
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
      )}
    />
                      
             {/* <h1 className="text-4xl text-white text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
                  <AuroraText>.</AuroraText>
             </h1> */}
             <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-hidden">
      {/* <motion.img
        // src="https://assets.aceternity.com/linear-demo.webp"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      /> */}
      <div className="grid text-center m-auto w-[21rem] lg:w-[60rem]">
            <h1 className=" text-center text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                Transforming businesses through innovative <br /> <ColourfulText text="digital solutions" /> <br /> 
            </h1>
            <h3 className="text-gray-400 mt-4 text-center ">
                Elevate your business with cutting-edge web and app solutions
             </h3>
                {/* button for getting access to agent via email/chat on whatsapp */}
             <div className="m-auto">
                <PulsatingButton className="pulseColor mt-4 w-[13rem] ">Get In Touch</PulsatingButton>;
            </div>
      </div>
 
    </div>
           




  </div>
  )
}

export default Homepage
