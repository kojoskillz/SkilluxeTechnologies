import Video_dialogue from "../components/Video_dialogue/Video_dialogue";
import Homepage from "../components/Homepage/Homepage";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import Aboutus from "../components/About/Aboutus";



export default function Mainpage() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Video_dialogue />
      <Aboutus />
     
    </div>
  );
}
