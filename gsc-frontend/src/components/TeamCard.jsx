import React from "react";
import "./TeamCard.css";
// import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TeamCard(props) {
  // console.log(props.image);
  return (
    <div className="cardbox" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="blackbox ">
        <h2 className="card-title font-inter">{props.name}</h2>
        <div className="card-content">
          <div className="btn">
            <a
              href={"//" + props.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className=" sm:h-12 h-10 sm:text-5xl text-3xl text-white "></Instagram>
            </a>
            <a
              href={"//" + props.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className=" sm:h-12 sm:text-5xl text-3xl h-10 text-white 0"></FaXTwitter>
            </a>
            <a
              href={"//" + props.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className=" sm:h-12 sm:text-5xl text-3xl h-10 text-white "></FaFacebook>
            </a>
            <a
              href={"//" + props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className=" sm:h-12 h-10 sm:text-5xl text-3xl text-white  "></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
