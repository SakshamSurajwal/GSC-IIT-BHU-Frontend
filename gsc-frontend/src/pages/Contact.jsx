import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactCard from "../components/ContactCard.jsx";
import cricket from "../assets/cricket.png"
import parikshitImage from "../assets/Contact/Parikshit.jpeg"
import tusharImage from "../assets/Contact/Tushar.jpg"
import sunilImage from "../assets/Contact/Sunil.jpg"
import anshImage from "../assets/Contact/Anshpreet.jpg"


function Contact() {
  const [scrolling, setScrolling] = useState(false);

  const data = [
    {
      name: "Parikshit Patil",
      position:"Joint General Secretary",
      imageUrl: parikshitImage,
      email: "john.doe@example.com",
      instagram: "www.instagram.com/1_parikshit/",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },
    {
      name: "Anshpreet Bal",
      position:"Joint General Secretary",
      imageUrl: anshImage,
      email: "john.doe@example.com",
      instagram: "www.instagram.com/ansh_bal",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },
    {
      name: "Tushar Singh",
      position:"Joint General Secretary",
      imageUrl: tusharImage,
      email: "john.doe@example.com",
      instagram: "www.instagram.com/prataptushar19",
      linkedin: "john_doe_linkedin",
      twitter:"twitter",
      facebook:"facebook"
    },
  ];
  
  
  
  
  
  
  
  

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
      <div
  className="flex items-center justify-center"
  style={{ background: "linear-gradient(to right, #2C3E50, #4CA1AF)" }}
>
  {/* <div
    style={{
      position: "absolute",
      top: "32%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "24vw",
      color: "antiquewhite",
      opacity:'0.7',
      fontFamily:'lexend zetha',
      fontWeight:"bold"
    }}
  >
    Meet our team
  </div> */}
  <div className="absolute font-lexend text-white sm:top-[15%] top-[15%] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] flex items-center   opacity-40 ">
         <div className="hidden sm:flex sm:items-center sm:justify-center w-[100%]">
           <p>Meet our Team</p>
         </div>
         <div className="flex flex-col sm:hidden items-center justify-center w-[100%] ">
            <p>Meet our</p>
            <p>Team</p>
         </div>
  </div>
  
  <div className="flex items-center flex-wrap justify-center sm:gap-20 sm:pt-[200px] pt-[220px] pb-20 px-10">
     <div className="hidden lg:flex w-[250px] h-[470px] bg-transparent">
    
     </div>
     <div>
    <ContactCard
      name="Sunil Verma"
      position="General Secretary"
      image={sunilImage}
      // gmail=""
      instagram="www.instagram.com/sunil_verma1610"
      // linkedin=""
      // facebook=""
      // twitter=""
    />
     </div>
     <div className="hidden lg:flex w-[250px] h-[470px] bg-transparent">
    
     </div>
    {data.map((member) => (
      <div>
        <ContactCard
          name={member.name}
          position={member.position}
          image={member.imageUrl}
          gmail={member.email}
          instagram={member.instagram}
          linkedin={member.linkedin}
          facebook={member.facebook}
          twitter={member.twitter}
        />
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default Contact;
