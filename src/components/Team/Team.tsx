import React from 'react'
import Image from "next/image"
import ColourfulText from "@/components/ui/colourful-text";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils"


const Team = () => {
  return (
    
    <div className='relative items-center justify-center overflow-hidden bg-black pb-20 p-10'>
            <GridPattern
                    width={50}
                    height={50}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,black,transparent)]",
                    )}
                    />
        <div className='bg-white lg:p-5 p-1 w-[20rem] item-center place-content-center  m:auto lg:m-auto lg:w-[85rem] rounded-[5rem]'>
     
         <h1 className='font-bold p-5 text-4xl lg:text-[4rem] text-center '> 
            <br /> <ColourfulText text="Meet The  Creative Team" />   
         </h1>
         <h2 className='text-black text-center text-2xl font-semibold text-wrap max-w-[45rem] m-auto '>
            Get to know our talented team of experts, driven by a shared passion for creating exceptional 
            web experiences that inspire and engage.
         </h2>
       
       {/* team pictures */}
       <div className='lg:flex grid gap-2 m-auto place-content-center'>
            <div className='p-5 z-50'>
                    <Image
                        src="/propic2.png"
                        width={500}
                        height={400}
                        alt="linear demo image"
                        className=" object-cover z-50 h-[32rem] w-[25rem] rounded-2xl "
                        />
                        <div className='text-center mt-4 uppercase '>
                            <h1 className='text-gray-800 font-bold font-sans text-md lg:text-2xl '>
                                Ebenezer Kwadwo Amoa
                            </h1>
                            <h3 className='text-gray-400 font-semibold text-md lg:text-sm '>
                                Founder/Software Engineer
                            </h3>
                        </div>
            </div>

            <div className='p-5 z-50 rounded-2xl'>
                    <Image
                        src="/propic1.png"
                        width={460}
                        height={500}
                        alt="linear demo image"
                        className=" object-cover h-[32rem] w-[25rem] rounded-2xl  "
                        />
                        <div className='text-center mt-4 uppercase '>
                        <h1 className='text-gray-800 font-bold font-sans text-md lg:text-2xl '>
                                Ebenezer Kofi Amoh
                            </h1>
                            <h3 className='text-gray-400 font-semibold text-md lg:text-sm '>
                                Co-Founder
                            </h3>
                        </div>
            </div>

            <div className='p-5 z-50 rounded-2xl'>
                    <Image
                        src="/propic3.png"
                        width={460}
                        height={500}
                        alt="linear demo image"
                        className=" object-cover h-[32rem] w-[25rem] rounded-2xl  "
                        />
                        <div className='text-center mt-4 uppercase '>
                            <h1 className='text-gray-800 font-bold font-sans text-md lg:text-2xl '>
                                Rahul Dev
                            </h1>
                            <h3 className='text-gray-400 font-semibold text-md lg:text-sm '>
                                 Fullstack Developer
                            </h3>
                        </div>
            </div>
             
       </div>
       </div>
    </div>
  )
}

export default Team
