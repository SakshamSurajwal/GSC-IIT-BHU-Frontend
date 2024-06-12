import React, { useEffect, useState } from "react";
import Heart from "/assets/Heart.svg";
import Temple from "/assets/Temple.svg";
import Individual from "/assets/Individual.svg";
import Team from "/assets/Team.svg";
import "../App.css";
import { useInView } from "react-intersection-observer";
const Stats = () => {
  const a = 20; // Fetch from backend from hook
  const a1 = 4;
  const a2 = 19;
  const a3 = 20;
  const a4 = 4;
  const [core, setCore] = useState(0);
  const [institute, setInstitute] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [events, setEvents] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  // useEffect(() => {
  //   let r;
  //   // console.log('Hello');
  //   if (inView && core < a && institute < a && clubs < a && events < a) {
  //     r = setInterval(() => {
  //       setCore((c) => c + 1);
  //       setInstitute((i) => i + 1);
  //       setClubs((c) => c + 1);
  //       setEvents((e) => e + 1);
  //     }, 100);
  //   }
  //   return () => clearInterval(r);
  // }, [clubs, core, institute, events, inView]);

  useEffect(() => {

    let intervalId;

    if (inView) {
      intervalId = setInterval(() => {
        if (core < a1) {
          setCore((prevCore) => prevCore + 1);
        }
        if (institute < a2) {
          setInstitute((prevInstitute) => prevInstitute + 1);
        }
        if (clubs < a3) {
          setClubs((prevClubs) => prevClubs + 1);
        }
        if (events < a4) {
          setEvents((prevEvents) => prevEvents + 1);
        }

        // Clear interval when all conditions are met
        if (core >= a1 && institute >= a2 && clubs >= a3 && events >= a4) {
          clearInterval(intervalId);
        }

      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [core, institute, clubs, events, inView]);

  return (
    //For large screens
    <div ref={ref} className="bg-statsbg ">
      <div className="bg-[url('/assets/Group.svg')] bg-no-repeat bg-left-bottom bg-[length:120px] smd:bg-[length:175px]  ">
        <div className="bg-[url('/assets/STATS.svg')] bg-no-repeat  bg-top-3 bg-[length:300px] smd:bg-[length:400px] md:bg-top-4 ">
          <div className="bg-[url('/assets/DiscusThrower.svg')] bg-no-repeat bg-right-bottom bg-[length:175px]  smd:bg-[length:250px]">
            <div className=" grid grid-cols-1 gap-4 ss:grid-cols-2  place-content-center  smd:flex  smd:justify-evenly pb-24 pt-24 smd:pt-32 smd:pb-40">
              <div className="text-center font-inter flex flex-col">
                <img className="image-stats" src={Heart} alt="Heart" />

                <div className="text-white font-bold  text-2xl  smd:text-3xl pt-6">{core}</div>

                <div className="text-white font-semibold text-xl  smd:text-2xl pt-2">
                  Core Team Members
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img className="image-stats" src={Team} alt="Team" />
                <div className="text-white font-semibold smd:font-bold text-2xl  smd:text-3xl pt-6">
                  {institute}
                </div>
                <div className="text-white font-semibold text-xl  smd:text-2xl pt-2">
                  Institute Teams
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img className="image-stats" src={Temple} alt="Temple" />

                <div className="text-white font-semibold smd:font-bold text-2xl  smd:text-3xl pt-6">
                  {clubs}
                </div>
                <div className="text-white font-semibold text-xl  smd:text-2xl pt-2">
                  Clubs and Societies
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img
                  className="image-stats"
                  src={Individual}
                  alt="Individual"
                />
                <div className="text-white font-semibold smd:font-bold text-2xl smd:text-3xl pt-6">
                  {events}
                </div>
                <div className="text-white font-semibold text-xl smd:text-2xl pt-2">
                  Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
