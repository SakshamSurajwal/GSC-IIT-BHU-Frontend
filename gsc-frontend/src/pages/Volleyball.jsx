import Navbar from "../components/Navbar/Navbar";
import achieve from "../images/achieve.svg";
import ContactCard from "../components/ContactCard";
import CricketHero from "../components/CricketHero";
import image1 from "/assets/Aquatics/Aquatics3.jpeg";
import image2 from "/assets/Aquatics/Aquatics4.jpeg";
import image3 from "/assets/Aquatics/Aquatics5.jpeg";
import ImageCarousel from "../components/CarouselSports";

const Volleyball = () => {
  const images = [`${image1}`, `${image2}`, `${image3}`];

  return (
    <div className="bg-[#B9B9B9]">
      <Navbar />
      <div style={{ position: "relative", zIndex: "1" }}>
        <CricketHero sports_name="Volleyball" />
      </div>

      <div>
        <div className="relative bg-[#B9B9B9] bg-left-bottom bg-[length:305px] mt-44">
          <p className="absolute top-0 left-0 w-full sm:text-[120px] text-white opacity-50 font-bold font-lexend text-center tracking-wide text-[40px]">
            Facilities
          </p>
          <div className="relative sm:flex flex-row mx-6 hidden gap-40 pl-10 z-10 justify-center">
            <div className="w-[741px] h-[476px] relative">
              <div>
                <p className="font-lexend text-xl text-[#000000] tracking-wide absolute top-[120px] left-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-11 mt-32 mb-16">
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                <img
                  src="/assets/Aquatics/Aquatics6.jpeg"
                  className="h-[344px] border-4 border-[#A2A2A2] absolute top-0 left-0"
                  alt="GSC_Logo"
                />
              </div>
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                {/* <img
        src=""
        className="h-[397px] border-4 border-[#A2A2A2] absolute top-0 left-0"
        alt="GSC_Logo"
      /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:hidden text-center ">
            <div className="flex flex-row gap-3 items-center justify-around mt-10 z-20">
              <div className="h-[200px] w-[150px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                <img
                  src="/assets/Aquatics/Aquatics6.jpeg"
                  // className="h-[397px] border-4 border-[#A2A2A2]"
                  className="h-[184px]"
                  alt="GSC_Logo"
                />
              </div>
              <div className="h-[200px] w-[150px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl">
                {/* <img
                src=""
                className="h-[397px] border-4 border-[#A2A2A2]"
                alt="GSC_Logo"
              /> */}
              </div>
            </div>
            <p className="font-lexend text-[10px] text-[#000000] my-auto mx-auto px-[35px] justify-center items-center flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <div className="bg-[#B9B9B9] flex flex-col items-center justify-center gap-10">
          <p className="w-auto sm:text-[100px] text-[30px] text-white opacity-50 font-bold font-lexend text-center tracking-wide absolute z-10 mb-[330px] sm:mt-0 mt-20">
            Achievements
          </p>

          <div className="absolute z-10 items-center justify-center mt-40 hidden lg:block">
            <div className="flex flex-row gap-11 mb-16 items-center justify-center">
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                <img
                  src="/assets/Aquatics/Aquatics3.jpeg"
                  className="h-[344px] border-4 border-[#A2A2A2] absolute top-0 left-0"
                  alt="GSC_Logo"
                />
              </div>
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                <img
                  src="/assets/Aquatics/Aquatics4.jpeg"
                  className="h-[344px] border-4 border-[#A2A2A2] absolute top-0 left-0"
                  alt="GSC_Logo"
                />
              </div>
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                <img
                  src="/assets/Aquatics/Aquatics5.jpeg"
                  className="h-[344px] border-4 border-[#A2A2A2] absolute top-0 left-0"
                  alt="GSC_Logo"
                />
              </div>
              <div className="h-[360px] w-[296px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl relative">
                {/* <img
                  src=""
                  className="h-[344px] border-4 border-[#A2A2A2] absolute top-0 left-0"
                  //   alt="GSC_Logo"
                /> */}
              </div>
            </div>
          </div>

          <ImageCarousel images={images} />
          <img src={achieve} className="relative z-1" />
        </div>
      </div>

      <div className="h-full flex flex-col justify-center items-center gap-10 bg-[#6690B8]">
        <div>
          <p className="w-full sm:text-[100px] text-[40px] text-black font-bold font-lexend text-center tracking-wider sm:mt-0">
            Our Team
          </p>
        </div>
        <div className="sm:flex flex-row items-center gap-28 hidden">
          <ContactCard image="/assets/Aquatics/Aquatics2.jpeg" />
          <ContactCard />
          <ContactCard />
        </div>
        <div className="flex flex-col items-center lg:hidden">
          <ContactCard image="/assets/Aquatics/Aquatics2.jpeg" />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Volleyball;
