import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import coderace50x50 from "../assets/coderace50x50.png";

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bottom-0 left-0">
      <Typography color="blue-gray" className=" font-bold">
        &nbsp; &nbsp; &nbsp; CodeRace 2023 <img src={coderace50x50} alt="CodeRace" className="inline-block w-6 h-6" /> 
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
         
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FaGithub />
          </Typography>
        </li>
        <li> 
          
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FaLinkedin /> 
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

