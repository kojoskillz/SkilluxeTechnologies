
import '../app/globals.css';
import Video_dialogue from "../components/Video_dialogue/Video_dialogue";
import Homepage from "../components/Homepage/Homepage";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import Aboutus, { MagicCardDemo } from "../components/About/Aboutus";
import Choose from '../components/Choose/Choose';
import Team from '../components/Team/Team';
import { Testimonials } from '../components/Testimonials/Testimonials';
import Projects from '../components/Projects/Projects';
import { WorldMapDemo } from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';



export default function Mainpage() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Video_dialogue />
      <Aboutus />
      <MagicCardDemo />
      <Choose />
      <Team />
      <Testimonials />
      <Projects />
      <FAQ />
      <WorldMapDemo />
     
     
    </div>
  );
}
