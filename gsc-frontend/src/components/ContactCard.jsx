import React from "react";
import "./ContactCard.css";
// import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactPageFrame from "../../public/assets/ContactPageFrame.png"

function ContactCard(props) {
  // console.log(props.image);
  return (
    <div className="c-cardbox flex justify-end " >
      <div className=" ">
       
        <div className="c-card-content ">
            <div className="flex flex-col  items-center justify-center  text-black sm:mb-[25px] mb-[20px]">
                <img src={props.image} className="h-[120px] mb-[30px] sm:mb-[20px] sm:h-[180px] md:h-[200px]"></img>
                <h2 className="font-bold md:text-[50px] sm:text-[40px] text-[25px] ">{props.name}</h2>
                <h3 className="sm:text-[24px] md:text-[30px] text-[18px]">{props.position}</h3>
            </div>
          <div className="flex gap-4 sm:gap:12  items-center justify-center mb-[15px] sm:mb-[30px]">
          <a
              href={"//" + props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className=" sm:h-12 h-10 sm:text-3xl md:text-5xl text-xl text-black  "></FaLinkedin>
            </a>
            <a
              href={"//" + props.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className=" sm:h-12 sm:text-3xl md:text-5xl text-xl h-10 text-black "></FaXTwitter>
            </a>
            <a
              href={"//" + props.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className=" sm:h-12 sm:text-3xl md:text-5xl text-xl h-10 text-black "></FaFacebook>
            </a>
            
            <a
              href={"//" + props.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className=" sm:h-12 h-10 sm:text-3xl md:text-5xl text-xl text-black "></Instagram>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
