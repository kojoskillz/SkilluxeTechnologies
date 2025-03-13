'use client'

import React from 'react'
import HeroVideoDialog from "../magicui/hero-video-dialog";


const Video_dialogue = () => {
  return (

    <div className='bg-black pb-[2rem]  '>

    <div className="relative lg:w-[60rem] mb-[5rem] mt-[-6rem]  m-auto ">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    </div>
  )
}

export default Video_dialogue
