import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import IndividualEventsHero from "../components/IndividualEvents/IndividualEventsHero";
import IndividualEventsAbout from "../components/IndividualEvents/IndividualEventsAbout";
function IndividualEventsPage() {
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
       <IndividualEventsHero />
       <IndividualEventsAbout />
    </>
  );
}

export default IndividualEventsPage;
