import image1 from "../images/cricket.svg";

const ImageStack = () => {
  return (
    <>
      <div className="sm:flex hidden items-center justify-center">
        <div className=" flex flex-row gap-7 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img src={image1} alt="Image 1" className="w-[450px] h-[280px]" />
            <p className="text-center font-lexend text-md w-[450px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={image1} alt="Image 1" className="w-[450px] h-[280px] " />
            <p className="text-center font-lexend text-md w-[450px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={image1} alt="Image 1" className="w-[450px] h-[280px] " />
            <p className="text-center font-lexend text-md w-[450px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className=" flex flex-row justify-around">
          <div className="flex flex-col">
            <img src={image1} alt="Image 1" className="w-[300px] h-[186px]" />
            <p className="text-center font-lexend text-sm w-[300px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div>
          {/* <div className="flex flex-col items-center">
            <img
              src="public/assets/cricket.svg"
              alt="Image 1"
              className="w-[570px] h-[316px] "
            />
            <p className="text-center font-lexend text-md w-[510px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div> */}
          {/* <div className="flex flex-col items-center">
            <img
              src="public/assets/cricket.svg"
              alt="Image 1"
              className="w-[570px] h-[316px] "
            />
            <p className="text-center font-lexend text-md w-[510px] border-2 border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ImageStack;
