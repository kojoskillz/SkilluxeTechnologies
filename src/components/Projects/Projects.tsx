import React from 'react'
import Image from 'next/image'
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils"


const Projects = () => {
  return (
    <div className='bg-black pb-20 pt-20 place-content-center m-auto'>
 
          <div>
                <h1 className="text-white font-bold text-5xl text-center">
                    Projects
                </h1>
                <h3  className="text-white font-bold text-3xl text-center">
                   Our Successful Work With Clients
                </h3>
          </div>

          {/* images for projects */}
          <div className='grid lg:grid-cols-2 gap-y-10 lg:mt-[3rem] lg:m-[10rem] m-5 place-content-center' >
     
<div>
{/* <GridPattern
                          width={50}
                          height={50}
                          x={-1}
                          y={-1}
                          strokeDasharray={"4 2"}
                          className={cn(
                              "[mask-image:radial-gradient(600px_circle_at_center,black,transparent)]",
                          )}
                          /> */}
</div>

            <div className='m-auto place-content-center'>
                  <Image
                        src="/imga.jpg"
                        width={500}
                        height={600}
                        alt="linear demo image"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                     <div className='mt-4'>
                          <h1 className='text-white text-left font-bold text-xl'>
                              Digital Agency
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque vitae  Soluta doloremque vitae 
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                              Live Preview
                          </button>
                      </div>
            </div>
              
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgb.jpg"
                        width={500}
                        height={600}
                        alt="linear demo image"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                       <div className='mt-4'>
                          <h1 className='text-white text-left font-bold text-xl'>
                              Digital Agency
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque vitae  Soluta doloremque vitae 
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                              Live Preview
                          </button>
                      </div>
            </div>
              
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgc.webp"
                        width={500}
                        height={600}
                        alt="linear demo image"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                      <div className='mt-4'>
                          <h1 className='text-white text-left font-bold text-xl'>
                              Digital Agency
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque vitae  Soluta doloremque vitae 
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                              Live Preview
                          </button>
                      </div>
            </div>
              
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgd.png"
                        width={500}
                        height={600}
                        alt="linear demo image"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                        <div className='mt-4'>
                          <h1 className='text-white text-left font-bold text-xl'>
                              Digital Agency
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque vitae  Soluta doloremque vitae 
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                              Live Preview
                          </button>
                      </div>
            </div>
              

                      
          </div>
    </div>
  )
}

export default Projects
