'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Modus Light',
    desc: 'Modus Light is a modern lighting solution designed to enhance your office space with bright and energy-efficient illumination.',
    img: '/imga.png',
    link: 'https://modus-light-free.webflow.io',
  },
  {
    title: 'Home Ifye',
    desc: 'Home Ife is a reputable real estate company dedicated to quality, affordability, and customer satisfaction.',
    img: '/imgb.png',
    link: 'https://homeifye-free.webflow.io',
  },
  {
    title: 'Wealth Bento',
    desc: 'Wealth Bento is an innovative platform to track income, expenses, budgeting, and make informed financial decisions.',
    img: '/imgc.png',
    link: 'https://wealth-bento-webflow-template.webflow.io',
  },
  {
    title: 'Food Fantasy',
    desc: 'Food Fantasy brings your favorite dishes to your doorstep through a seamless and user-friendly online platform.',
    img: '/imgd.png',
    link: 'https://food-fantasy.webflow.io',
  },
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black">
      {/* Radial glow at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none z-0" />

      {/* Additional radial behind cards */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Our Successful Work With Clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:border-white/20"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={proj.img}
                  width={800}
                  height={500}
                  alt={proj.title}
                  className="h-[22rem] w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {proj.desc}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 px-6 py-2 text-sm font-semibold bg-white text-black rounded-md transition hover:bg-blue-600 hover:text-white"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
