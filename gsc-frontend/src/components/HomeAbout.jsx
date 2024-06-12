import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className=" bg-[url('/assets/QuotationTopleft.svg')]   ss:bg-[url('/assets/HomeAboutQuartercircle.svg')]  bg-no-repeat ss:bg-right-bottom bg-[length:235px]  md:bg-[length:302px]">
      <div className="bg-[url('/assets/HomeAboutCorner.svg')] bg-no-repeat bg-right-bottom bg-[length:235px] md:bg-[length:302px] ">
        <div className="ss:bg-[url('/assets/Batsman.svg')] bg-no-repeat bg-left-bottom sm:bg-left-bottom-3 md:bg-left-bottom-2 bg-[length:200px] ">
          <div className="ss:bg-[url('/assets/Cricketball.svg')] bg-no-repeat bg-right-top  md:bg-right-top-3 bg-[length:250px] ">
            <div className="pt-16 pb-9 pr-6 pl-10 ss:pt-16 ss:pb-36 ss:pl-10 ss:pr-44 md:pl-20 md:pr-80">
              <div className="font-lexend font-bold ss:font-semibold text-center ss:text-left text-3xl  md:font-medium md:text-4xl">
                ABOUT
              </div>
              <div className="font-lexend-exa pt-10 text-sm ss:text-md md:pt-12 md:text-[1.25rem] md:leading-7">
                The Games & Sports Council ignites a passion for athletics
                within the Institute, fostering a vibrant sports culture where
                everyone can thrive. This spirit extends to all members of the
                community, students, faculty, and staff alike, inviting them to
                experience the joy of their chosen games.
              </div>
              <div className="font-lexend-exa pt-6 text-sm ss:text-md ss:pt-4 pb-4 ss:pb-8  md:text-[1.25rem] md:leading-7">
                The Council aspires to weave sports into the very fabric of
                daily life. Throughout the year, a tapestry of activities
                unfolds, igniting friendly competition amongst those who share a
                love for a particular sport. Whether it be the grace of
                aquatics, the power of athletics, the focused rallies of
                badminton, or the teamwork of basketball, there's something for
                everyone. Boxing, chess, cricket, the thrill of football,
                handball's fast pace, the strategic mind games of hockey,
                kabaddi's agility, the rhythmic flow of kho-kho, the focused
                intensity of squash, the quick volleys of table tennis, the
                power of tennis, the discipline of taekwondo, the camaraderie of
                volleyball, or the dedication of weightlifting – the Council
                empowers participation in every pursuit. Here, every individual
                seeking a sport that resonates with them is embraced. The
                Council ensures they are well-equipped, with access to
                facilities, opportunities to excel, and the ultimate
                satisfaction of pursuing their athletic dreams.
              </div>

              <Link
                to={"/about"}
                className="font-inter text-about-red text-md  md:text-lg"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
