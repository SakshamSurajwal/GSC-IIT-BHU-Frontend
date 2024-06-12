import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import PatternOrg from "../assets/HeroSectionOrgPattern.svg";
import PatternBlue from "../assets/HeroSectionBluePattern.png";
import PatternQtr from "../assets/HeroSectionQuaterPattern.png";
import Vector from "../assets/Vector.png";

// eslint-disable-next-line react/display-name
const HeroSection = React.memo(() => {
  const items = [
    <img key="1" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 1" />,
    <img key="2" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 2" />,
    <img key="3" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 3" />,
  ];

  return (
    <div className="h-[530px] lg:h-[704px] md:h-[560px] sm:h-[460px] bg-[#430D9B] flex flex-row  justify-center sm:gap-[40px] relative z-[-2]">
      <div className="hidden sm:flex flex-col lg:mt-[140px] md:mt-[120px] sm:mt-[100px]  items-start   ">
        <div className="flex flex-col items-start justify-center font-lexend my-[30px] ">
          <p className=" lg:text-[50px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight">
            GAMES & SPORTS
          </p>
          <p className=" lg:text-[50px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight">
            COUNCIL
          </p>
          <p className=" lg:text-[40.5px] md:text-[30.5px] sm:text-[20.5px]  text-white font-bold font-lexend tracking-tight">
            IIT (BHU) VARANASI
          </p>
          <div className="flex items-start w-[50%] mt-[20px] ">
            <Link to="/contacts" element={<Contact></Contact>}>
              <button className="bg-[#D71C1B] text-white lg:text-[20px] md:text-[17px] sm:text-[15px] px-[15px] font-lexend py-[5px]">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sm:hidden flex flex-col justify-center relative h-[200px]">
          <img src={Vector} className=" w-[306px] h-[230px]  z-[-1]"></img>
          <p className="w-[100%] pl-[23px] pb-[20px] z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[15.5px]  text-white font-bold font-lexend tracking-tight">
            GAMES & SPORTS COUNCIL
          </p>
          <p className="w-[100%] pl-[43px] z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-7/8  text-[15.5px]  text-white font-bold font-lexend tracking-tight">
            IIT (BHU) VARANASI
          </p>
          <div className="flex w-[100%] justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50px]">
            <Link to="/contacts" element={<Contact></Contact>}>
              <button className="bg-[#D71C1B] text-white text-[12px] px-[5px] font-lexend py-[5px]">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:hidden w-[290px] pl-[15px] lg:h-[345px] relative">
          <Carousel items={items} />
        </div>
      </div>

      <div className="hidden  sm:flex ">
        <div className="lg:mt-[108px] md:mt-[108px] sm:mt-[108px] md:w-[420px] md:h-[650px]  sm:w-[300px] sm:h-[450px] lg:w-[528px] lg:h-[676px] relative">
          <Carousel items={items} />
          <img
            src={PatternBlue}
            className="hidden sm:flex absolute lg:bottom-[69px] md:bottom-[200px] sm:bottom-[106px] lg:left-[-200px] md:left-[-150px] sm:left-[-100px] z-[-1] lg:w-[350px] lg:h-[290px] md:w-[250px] md:h-[190px] sm:w-[180px] sm:h-[150px]"
          ></img>
        </div>
      </div>

      <img
        src={PatternQtr}
        className="hidden sm:flex absolute bottom-0 left-0 lg:w-[178px] lg:h-[176px] md:w-[120px] md:h-[118px] sm:w-[110px] sm:h-[108px]"
      ></img>
      <img
        src={PatternOrg}
        className="hidden sm:flex absolute top-0 right-0 z-[-1] lg:w-[374px] lg:h-[390px] md:w-[274px] md:h-[290px] sm:w-[200px] sm:h-[220px]"
      ></img>
    </div>
  );
});

export default HeroSection;
