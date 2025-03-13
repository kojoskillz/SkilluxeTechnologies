import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


const FAQ = () => {
  return (
    <div className='bg-black'>
          <div className='m-auto place-content-center'>
              <h1 className='text-center text-4xl p-2 text-white lg:text-5xl font-bold '>
                 Frequently asked questions
              </h1>
              <h2 className='text-center text-white text-2xl lg:text-xl p-2 font-semibold  '>
                 Answers to your questions about us
              </h2>
          </div>

    <Accordion type="single" collapsible className="lg:w-[42rem] w-[23rem] m-auto mb-[-5rem] place-content-center">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-white'>What services does your web agency offer?</AccordionTrigger>
        <AccordionContent className='text-white/80'>
            Our web agency offers a range of services, including custom web development, e-commerce solutions, 
            mobile app development, digital marketing (SEO, social media, PPC), and ongoing support and maintenance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-white'>How long does it take to complete a web development project?</AccordionTrigger>
        <AccordionContent className='text-white/80'>
            The duration of a web development project varies depending on the complexity of the project. 
            We provide a detailed timeline and milestones for each project to ensure our clients are informed throughout the process.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-white'> Do you provide ongoing support and maintenance?</AccordionTrigger>
        <AccordionContent className='text-white/80'>
        Yes, we offer ongoing support and maintenance services to ensure our clients&apos; websites continue to run smoothly and securely.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='text-white'>How do you ensure my website is secure?</AccordionTrigger>
        <AccordionContent className='text-white/80'>
            We take website security seriously and implement various measures to protect our 
            clients&apos; websites, including regular updates, backups, and malware scanning.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className='text-white'>What is the process for getting started with a web development, app, digital marketing, or SEO project?</AccordionTrigger>
        <AccordionContent className='text-white/80'>
        To get started, simply contact us to schedule a consultation. We&apos;ll discuss your project goals, provide a custom quote, 
        and outline the next steps to bring your vision to life..
        </AccordionContent>
      </AccordionItem>
    </Accordion>


    </div>
  )
}

export default FAQ
