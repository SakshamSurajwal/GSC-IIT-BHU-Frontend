import image1 from "../images/cricket.svg";
import pattern1 from "../images/pattern1.svg";
import pattern2 from "../images/pattern2.svg";

function CricketHero(props) {
  return (
    <div>
      {/* Desktop */}
      <div
        className="hidden h-[530px] lg:h-[704px] md:h-[560px] sm:h-[460px] sm:flex flex-row  justify-center sm:gap-[40px] relative z-[-2]"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "894px",
        }}
      >
        <div className=" sm:flex flex-col lg:mt-[90px] md:mt-[120px] sm:mt-[100px] items-center gap-[15rem]">
          <p className=" lg:text-[100px] md:text-[40.5px] sm:text-[25.5px] text-white font-bold font-lexend tracking-tight text-center mt-24">
            {props.sports_name}
          </p>
          <div className="relative bg-[#6690B8] p-4 w-[1200px] h-[600px] font-lexend text-center mt-20 ">
            <img
              src={pattern1}
              className="absolute top-5 left-5 z-10"
              style={{ width: "181px", height: "181px" }}
            />
            <img
              src={pattern2}
              className="absolute bottom-5 right-5 z-10"
              style={{ width: "181px", height: "181px" }}
            />
            <h2 className="text-black text-5xl mb-4 font-bold relative z-20 mt-5">
              About
            </h2>
            <p className="text-black text-2xl tracking-wider font-thin relative z-20 mb-16 mt-5 w-[1000px] left-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="sm:hidden h-[530px] lg:h-[704px] md:h-[560px] sm:h-[460px] flex flex-row  justify-center sm:gap-[40px] relative z-[-2]"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "284px",
        }}
      >
        <div className="justify-center relative h-[900px]">
          <p className="w-[100%] text-[60px] text-white font-bold font-lexend tracking-tight text-center mt-16">
            Cricket
          </p>
          <div className="relative bg-[#6690B8] p-4 w-[324px] h-[200px] font-lexend text-center mt-10 ">
            <img
              src={pattern1}
              className="absolute top-2 left-2 z-10"
              style={{ width: "80px", height: "80px" }}
            />
            <img
              src={pattern2}
              className="absolute bottom-2 right-2 z-10"
              style={{ width: "80px", height: "80px" }}
            />
            <h2 className="text-black text-xl mb-4 font-bold relative z-20">
              About
            </h2>
            <p className="text-black text-[10px] tracking-wider font-thin relative z-20 mb-16 w-[280px] left-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CricketHero;
