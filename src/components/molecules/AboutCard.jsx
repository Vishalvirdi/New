import React from "react";
import Typewriter from "typewriter-effect";
import myPhoto from "@/assets/images/pic.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div className="border-[1px] rounded-xl xl:w-96 md:w-[700px] w-full h-min duration-700">
      <div className="p-6 max-md:p-3">
        <div className="md:text-lg md:font-bold font-semibold">Vishal Virdi</div>
        <div className="text-sm text-[#59666c]">
          <Typewriter
            className="max-md:text-xs"
            options={{
              strings: ["FrontEnd Developer", "Flutter Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Image
          src={myPhoto}
          alt="image not found"
          className="h-60 max-lg:h-80 rounded-md duration-700"
        ></Image>
        <div className="text-xs font-normal pt-4  text-gray-400">
          Skilled <span className="font-bold text-gray-600">FrontEnd</span> and{" "}
          <span className="font-bold text-gray-600 ">Flutter Developer</span>{" "}
          with hands-on experience in designing dynamic interfaces and ensuring
          app stability across Android devices. Proficient in backend
          development with expertise in Node.js, Express.js, and MongoDB,
          delivering scalable solutions for social media and e-commerce
          applications. Demonstrated ability to implement secure user
          authentication and data management, showcasing strong problem-solving
          skills and commitment to client satisfaction.
        </div>
      </div>
      <hr></hr>
      <div className="p-6 max-md:p-3">
        <div className="text-lg font-medium pb-2">Factsheet</div>
        <h1 className="text-[15px] font-medium">Born</h1>
        <div className="text-[10px] font-normal text-gray-400 pb-2">
          <h2>Vishal Virdi</h2>
          <h2>(2002-01-12) 12 January 2002 (age 22)</h2>
          <h2>Hoshiarpur, Punjab</h2>
        </div>
        <h1 className="text-[15px] font-medium">Citizenship</h1>
        <h2 className="text-[10px] font-normal text-gray-400 pb-2">
          Indian (2002-present)
        </h2>
        <h1 className="text-[15px] font-medium">Occupations</h1>
        <div className="text-[10px] font-normal text-gray-400 pb-2">
          <h2>Student</h2>
          <h2>Developer</h2>
        </div>
      </div>
      <hr></hr>
      <div className="p-6 max-md:p-3">
        <div className="text-lg font-medium pb-2">Profiles</div>
        <div className="flex gap-2">
          <Link href={"https://www.linkedin.com/in/vishal-virdi/"} target="_blank" className=" border text-xs rounded-lg hover:bg-gray-100 flex gap-1 items-center p-1">
            <FaLinkedin></FaLinkedin>
            LinkedIn
          </Link>
          <Link href={"https://www.instagram.com/vishal_virdi_"} target="_blank" className=" border text-xs rounded-lg hover:bg-gray-100 flex gap-1 items-center p-1">
            <FaInstagramSquare></FaInstagramSquare>
            Instagram
          </Link>
          <Link href={"https://github.com/Vishalvirdi"} target="_blank" className=" border text-xs rounded-lg flex hover:bg-gray-100 gap-1 items-center p-1">
            <FaGithub></FaGithub>
            Github
          </Link>
       
        </div>
        <Link href={"https://leetcode.com/VishalVirdi"} target="_blank"  className="flex gap-2 pt-2">
          <div className=" border text-xs rounded-lg flex hover:bg-gray-100 gap-1 items-center p-1">
            <SiLeetcode></SiLeetcode>
            Leetcode
          </div>
          <Link href={"https://www.geeksforgeeks.org/user/vishalvirdi039/"}  target="_blank" className=" border text-xs hover:bg-gray-100 rounded-lg flex gap-1 items-center p-1">
            <SiGeeksforgeeks></SiGeeksforgeeks>
            GFG
          </Link>
        </Link>
      </div>
      <hr></hr>
      <div className="px-6 py-4 text-[10px] font-normal flex justify-between text-gray-400 ">
        Data by Me
        <div className="underline">feedback</div>
      </div>
    </div>
  );
};

export default AboutCard;
