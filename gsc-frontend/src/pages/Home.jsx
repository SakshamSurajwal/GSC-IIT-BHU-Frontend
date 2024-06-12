import { useEffect, useState } from "react";
import HomeAbout from "../components/HomeAbout";
import Stats from "../components/Stats";
import Video from "../components/Video";
import Quotation from "../components/Quotation";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Facilities from "../components/Facilities";

function Home() {
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
    <div>
      <Navbar scrolling={scrolling} />

      <div style={{ position: "relative", zIndex: "1" }}>
        <HeroSection></HeroSection>
      </div>

      <HomeAbout></HomeAbout>
      <Stats></Stats>
      <Facilities></Facilities>
      <Video></Video>
      <Quotation></Quotation>
    </div>
  );
}

export default Home;
