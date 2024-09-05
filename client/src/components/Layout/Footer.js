import { FaGithub, FaLinkedin, FaTelegram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-light p-4">
           <div className="text-center ">
            <a><FaLinkedin size={30} color="blue" /></a>
            <a><FaGithub size={30} color="black" className="mx-2"/></a>
            <a><FaXTwitter size={30} color="black" className="mx-2"/></a>
            <a><FaTelegram size={30} color="#229ED9" className="mx-2"/></a>
           </div>
            

    </div>
  );
};

export default Footer;
