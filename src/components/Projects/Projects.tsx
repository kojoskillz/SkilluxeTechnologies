import React from 'react'
import Image from 'next/image'
// import { GridPattern } from "../magicui/grid-pattern";
// import { cn } from "@/lib/utils"


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
          <div className=' lg:mt-[3rem] lg:m-[10rem] m-5 place-content-center' >
     
<div className='grid lg:grid-cols-2 gap-y-14 gap-x-10'>

{/* 
<GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                /> */}
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imga.png"
                        width={500}
                        height={600}
                        alt=""
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                     <div className='mt-4'>
                          <h1 className='text-white uppercase text-left font-bold text-xl'>
                               modus light
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                             Modus Light is a modern and sleek lighting solution designed to enhance your office space. Its slim and minimalist
                           profile seamlessly integrates into any workspace, providing bright and energy-efficient illumination.
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                             <a href="https://modus-light-free.webflow.io">Live Preview</a> 
                          </button>
                      </div>
            </div>
              
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgb.png"
                        width={500}
                        height={600}
                        alt="linear demo image"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                       <div className='mt-4'>
                          <h1 className='text-white uppercase text-left font-bold text-xl'>
                              home ifye
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                            Home Ife is a reputable real estate company dedicated to providing exceptional services to individuals 
                            and families seeking their dream homes. With a focus on quality, affordability, and customer satisfaction,
                            Home Ife strives to make the home-buying process seamless and enjoyable.
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                            <a href="https://homeifye-free.webflow.io">Live Preview</a>  
                          </button>
                      </div>
            </div>
              
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgc.png"
                        width={500}
                        height={600}
                        alt="wealth bento"
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                      <div className='mt-4'>
                          <h1 className='text-white uppercase text-left font-bold text-xl'>
                              wealth bento
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                                Wealth Bento is an innovative online platform designed to help you manage your finances effectively. This digital "purse&quot; 
                                allows you to track your income and expenses, set budgeting goals, and make informed financial decisions.
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                              <a href="https://wealth-bento-webflow-template.webflow.io">Live Preview</a>
                          </button>
                      </div>
            </div>
                                                                                                
            <div className='m-auto place-content-center'>
                  <Image
                        src="/imgd.png"
                        width={500}
                        height={600}
                        alt=""
                        className="object-cover rounded-2xl h-[30rem] w-[35rem] "
                      />
                     <div className='mt-4'>
                          <h1 className='text-white uppercase text-left font-bold text-xl'>
                               food fantasy
                          </h1>
                          <p className='text-gray-200 text-wrap'>
                          Food Fantasy is a revolutionary online food ordering platform that brings your favorite dishes right to your doorstep. With a vast network of partner restaurants 
                          and a user-friendly interface, Food Fantasy makes it easy to indulge in your culinary cravings.
                          </p>
                          <button className='text-blue-500 bg-white rounded-md w-[8rem] mt-2 p-2 cursor-pointer hover:translate-y-2 '>
                             <a href="https://food-fantasy.webflow.io">Live Preview </a> 
                          </button>
                      </div>
            </div>
              

                      
          </div>
    </div>
    </div>
  )
}

export default Projects
