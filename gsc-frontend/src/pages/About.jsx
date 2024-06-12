import React, { useEffect, useState } from "react";
import AboutHeroSection from "../components/About/AboutHeroSection";
import AboutGallery from "../components/About/AboutGallery";
import Navbar from "../components/Navbar/Navbar";
import AboutPageSection2 from "../components/About/AboutPageSection2";
import AboutPageSection1 from "../components/About/AboutPageSection1";

function About() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <>
      <Navbar scrolling={scrolling} />
      <AboutHeroSection></AboutHeroSection>
      <AboutPageSection1></AboutPageSection1>
      <AboutPageSection2></AboutPageSection2>
      <AboutGallery></AboutGallery>
    </>
  );
}

export default About;
