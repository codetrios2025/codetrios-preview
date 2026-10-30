import React from "react";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
// import OurServices from "./Services/OurServices";
import OurServices from "./OurServices";
import IndustriesWork from "./IndustriesWork";
import Idea from "./Idea";
import ScrollFX from "./AnimationScreen/Scrollfx";
const HomeRouteV1 = () =>{
  return(
    <>
      <ScrollFX />
      <HeroBanner />
      <AboutUs />
      <OurServices />
      <IndustriesWork />
      <Idea />
    </>
  )
}


export default HomeRouteV1;