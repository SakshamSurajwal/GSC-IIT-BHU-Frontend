import React, { useState } from "react";

const IndividualEventsAbout = () => {
  const tex = "At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati cupiditatenon provident, similique sunt in culpa qui officia deseruntmollitia animi, id est"
  const [text,setText]=useState([tex,tex])
  const [show,setShow]=useState(false)
  const handleClick = () => {
    setShow(!show)
    setText(show?[tex,tex]:[tex,tex,tex])
  }
  return (
    <div className=" bg-[url('/assets/QuotationTopleft.svg')]   ss:bg-[url('/assets/HomeAboutQuartercircle.svg')]  bg-no-repeat ss:bg-right-bottom bg-[length:235px]  md:bg-[length:275px]">
    <div className="bg-[url('/assets/HomeAboutCorner.svg')] bg-no-repeat bg-right-bottom bg-[length:235px] md:bg-[length:275px] ">
      <div className="ss:bg-[url('/assets/Batsman.svg')] bg-no-repeat bg-left-bottom sm:bg-left-bottom-3 md:bg-left-bottom-2 bg-[length:200px] ">
        <div className="ss:bg-[url('/assets/Cricketball.svg')] bg-no-repeat bg-right-top  md:bg-right-top-3 bg-[length:250px] ">
            <div className="pt-16 pb-9 pr-6 pl-10 ss:pt-16 ss:pb-36 ss:pl-10 ss:pr-52 md:pl-20 md:pr-96">
              <div className="font-lexend font-bold ss:font-semibold text-center ss:text-left text-2xl xs:text-3xl  md:font-medium md:text-4xl">Who are We ?</div>
              {text.map((tex,index)=>{return(
                <div key={index} className="font-lexend-exa  pt-10 text-[0.85rem] md:text-[1.3rem] ss:text-md md:pt-6 md:text-lg" >
                {tex}
              </div>)
              })}
              <span onClick={handleClick}  className="font-inter text-about-red text-md pt-5  cursor-pointer md:text-lg" >
                {show? "Read Less ..":"Read More .."}
              </span>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default IndividualEventsAbout;
