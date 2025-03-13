"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
// import Image from "next/image"

export function Testimonials() {
  return (
    
    <div className="h-[40rem] pb-[30rem] pt-[25rem] lg:pt-[15rem] lg:pb-[15rem] flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
       <div>
          <h1 className="text-white font-bold text-5xl text-center">
              Testimonials
          </h1>
          <h3  className="text-white font-bold text-3xl text-center">
              Proven Track Record of Success
          </h3>
       </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials2}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We were blown away by the team's creativity and expertise! Our new website has exceeded our expectations and has already led to a significant increase in sales. Highly recommend!",
    name: "Peter Mensa",
    title: "Owner of Accra Fashion House",
  },
  {
    quote:
      "The web agency delivered a stunning website that perfectly captures our brand's essence. Their attention to detail, communication, and project management were top-notch. We couldn't be happier!",
    name: "Kojo Dadzie",
    title: "CEO of Kumasi Tech Solutions",
    
    
  },
  {
    quote: "We needed a website that would showcase our artistic work, and the web agency nailed it! The design is modern, sleek, and easy to navigate. Their team was a pleasure to work with, and we highly recommend them.",
    name: "Adwoa Baah",
    title: "Artist and Owner of Baah Studios",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
     "The web agency's expertise in e-commerce solutions has been invaluable to our business. Our online store is now user-friendly, secure, and optimized for conversions. We've seen a significant boost in sales and customer satisfaction.",
    name: "Kofi Mensah",
    title: "Mensah's Online Market",
  },
];
const testimonials2 = [
  {
    quote:
      "The web agency delivered a stunning website that perfectly captures our brand essence. Their attention to detail and responsive design have taken our business to the next level!",
    name: "David King",
    title: "CEO of NovaTech Inc.",
  },
  {
    quote:
      "We needed a website that would showcase our services and establish us as industry leaders. Skilluxe delivered a professional, modern website that has helped us achieve our goals and attract new clients.",
    name: "Rachel Gyle",
    title: "Director of Operations at ProCare Services",
    
    
  },
  {
    quote: "We struggled to find a web agency that truly understood our vision. Luckily, we found Skilluxe! They crafted a custom website that exceeded our expectations and has become a vital tool for our business.",
    name: "Brian Narteh",
    title: "Marketing manager",
  },
  {
    quote:
      "We were blown away by the team's creativity and expertise. Our new website has not only improved our online presence but also increased our sales by 30%!",
    name: "Sophia Brown",
    title: "Owner Green Earth Landscaping",
  },
  {
    quote:
     "Just what we needed for our business, simply the best web agency.",
    name: "Akosua Gyampo",
    title: "Gyamps Real Estate",
  },
];
