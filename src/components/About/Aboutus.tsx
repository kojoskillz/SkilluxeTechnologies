"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

// import { Button } from "@/components/ui/button";
import {
  Card,

  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";




const words = 
`We're a team of innovative thinkers, creatives,
and tech enthusiasts passionate about crafting exceptional digital experiences. 
Our mission is to empower businesses to thrive 
in the digital age through cutting-edge web and app solutions.`;

export default function Aboutus() {
  return <TextGenerateEffect words={words} />;


};

export function MagicCardDemo() {
    const { theme } = useTheme();
    return (

      

   <div className="grid p-4   lg:flex gap-4 place-content-center m-auto bg-black pb-20">


       <div className="relative items-center justify-center overflow-hidden rounded-lg  bg-background w-[22rem] h-[35rem] m-auto ">
                <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                />
                       <div className="m-5">
                            <Image 
                                src="/img1.png"
                                width={70}
                                height={70} alt={""}   
                                className="m-4 mt-10"               
                            /> 
                        <div>              
                    <div className="m-5 ">
                        <div className="text-5xl  font-semibold mt-16">Web Design Agency</div>
                                <div className="text-md mt-10 text-gray-500">
                                    As a premier web design and digital agency, our experts in design and development go above and beyond to make 
                                    sure your website stands out and performs exceptionally.
                                </div>
                        </div>
                    </div>
            </div>
    </div> 

       <div className="relative items-center justify-center overflow-hidden rounded-lg  bg-background w-[22rem] h-[35rem] m-auto ">
                <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                />
                       <div className="m-5">
                            <Image 
                                src="/img2.png"
                                width={70}
                                height={70} alt={""}   
                                className="m-4 mt-10"               
                            /> 
                        <div>              
                    <div className="m-5 ">
                        <div className="text-5xl  font-semibold mt-16">Mobile App Development</div>
                                <div className="text-md mt-10 text-gray-500">
                                    Let us guide you on an exciting journey, turning your app idea into a stunning reality. From start to finish, we&apos;re here to ensure your app shines brilliantly in every way.
                                </div>
                        </div>
                    </div>
            </div>
    </div> 

       <div className="relative items-center justify-center overflow-hidden rounded-lg  bg-background w-[22rem] h-[35rem] m-auto ">
                <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                />
                       <div className="m-5">
                            <Image 
                                src="/img3.png"
                                width={70}
                                height={70} alt={""}   
                                className="m-4 mt-10"               
                            /> 
                        <div>              
                    <div className="m-5 ">
                        <div className="text-5xl  font-semibold mt-16">Digital Marketing</div>
                                <div className="text-md mt-10 text-gray-500">
                                In today&apos;s digital world, your online presence is more crucial than ever. Make an impact wherever your customers find you, with our dynamic digital marketing strategies that amplify your brand’s voice and ensure you&apos;re remembered. Let&apos;s make your digital presence vibrant and unforgettable.
                                </div>
                        </div>
                    </div>
            </div>
    </div> 

           
            <Card className="w-[22rem] h-[35rem] m-auto border-none  bg-blue-500">
     
                <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                <CardHeader className="bg-blue-500">
                    <CardTitle className="text-xl text-white">Need Help</CardTitle>
                    <CardDescription className="text-5xl text-white">
                       Book a call with  us
                    </CardDescription>
                   
                </CardHeader>
               

                </MagicCard>
                <Image
                             src="/img0.png"
                             width={200}
                             height={200}
                             alt="linear demo image"
                             className="absolute w-[732px] h-[52rem] mt-[-5.5rem] ml-[-3rem] lg:w-[50rem] lg:h-[25rem] lg:mt-[8.5rem]  lg:ml-[-10rem] object-contain "
                           />
            </Card>


      

      </div>
    );
  }
  