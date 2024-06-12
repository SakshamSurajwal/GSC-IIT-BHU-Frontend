import React from "react";

const AboutPageSection1 = () => {
  return (
    <div className="bg-[url('/assets/BG-1.svg')] bg-left-bottom bg-[length:305px]">
      <div className="relative sm:grid grid-cols-2 mx-6 hidden">
        <img
          src="/assets/Semicircle.png"
          className="h-[200px] md:h-[350px] absolute right-[-25px] top-[-100px] md:top-[-176px] hidden sm:block"
          alt="Semicircle"
        />
        {/* image-div start*/}
        <div className="mx-auto my-auto">
          <img
            src="/assets/IITBHUSportsLogo2.png"
            className="h-[350px]"
            alt="GSC_Logo"
          />
        </div>
        {/* image-div end*/}
        {/* text-div start*/}
        <div className="ml-[-20px]">
          <div className="pt-[60px] pb-[23px] pr-[165px]">
            <p className="font-lexend-exa text-[23px] text-[#000000]">
            
            The Games and Sports Council at the Indian Institute of Technology (BHU), 
            formerly known as Banaras Engineering College, traces its roots back to 
            the establishment of the institute in 1919. From its inception, sports 
            activities were an integral part of campus life, fostering camaraderie 
            and physical well-being among students. Over the years, the council has 
            evolved significantly, with key milestones including the formalization of 
            its structure and activities in the 1960s and the inauguration of dedicated
            sports facilities on campus in the 1980s.

            </p>
          </div>
          <div className="pr-[165px] pb-[24px]">
            <p className="font-lexend-exa text-[22px] text-[#000000] mb-5">
            
            The Games and Sports Council of IIT BHU cultivates a vibrant sports culture, 
            inviting every member of our community to embrace their passion for athletics. 
            We seamlessly integrate sports into daily life, offering a diverse range of 
            activities that foster camaraderie and friendly competition. From aquatics to 
            athletics, basketball to weightlifting, we empower participation in every pursuit. 
            Join us, where every athlete is supported and encouraged to excel, shaping a community 
            where the love of sports thrives boundlessly.
              
            </p>
          </div>
        </div>
        {/* text-div end*/}
      </div>
      <div className="flex flex-col sm:hidden">
        <div className="flex flex-row">
          <img
            src="/assets/IITBHUSportsLogo2.png"
            className="w-[201px] h-[142px] my-auto"
            alt="GSC_Logo"
          />
          <p className="font-lexend-exa text-[10px] text-[#000000] my-auto mx-auto px-[35px] justify-center ml-[-68px] xxs:ml-[-30px] mb-[25px] mt-[10px]">
            The Games and Sports Council at the Indian Institute of Technology (BHU), 
            formerly known as Banaras Engineering College, traces its roots back to 
            the establishment of the institute in 1919. From its inception, sports 
            activities were an integral part of campus life, fostering camaraderie 
            and physical well-being among students. Over the years, the council has 
            evolved significantly, with key milestones including the formalization of 
            its structure and activities in the 1960s and the inauguration of dedicated
            sports facilities on campus in the 1980s.
          </p>
        </div>

        <p className="font-lexend-exa text-[10px] text-[#000000] mx-auto mt-[-20px] px-[30px] pb-[15px]">
            The Games and Sports Council of IIT BHU cultivates a vibrant sports culture, 
            inviting every member of our community to embrace their passion for athletics. 
            We seamlessly integrate sports into daily life, offering a diverse range of 
            activities that foster camaraderie and friendly competition. From aquatics to 
            athletics, basketball to weightlifting, we empower participation in every pursuit. 
            Join us, where every athlete is supported and encouraged to excel, shaping a community 
            where the love of sports thrives boundlessly..
        </p>
      </div>
    </div>
  );
};

export default AboutPageSection1;
