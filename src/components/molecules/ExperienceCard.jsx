import Link from "next/link";
import React from "react";
import { FaBuildingShield } from "react-icons/fa6";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { formatDate } from "@/utils/formateDate";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { TbApi } from "react-icons/tb";
const ExperienceCard = (props) => {
  const { experience } = props;

  // Output: Jan, 2023

  const techStacks = {
    React: <SiMongodb className="text-green-700" />,
    "Node.js": <SiNodedotjs className="text-green-700" />,
    Express: <SiExpress className="text-blue-700" />,
    JavaScript: <SiJavascript className="text-yellow-700" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-700" />,
    HTML: <IoLogoHtml5 className="text-red-700" />,
    CSS: <FaCss3Alt className="text-cyan-700" />,
    "Redux Toolkit": <SiRedux className="text-black-700" />,
    Flutter: <RiFlutterFill className="text-cyan-700" />,
    Dart: <DiDart className="text-blue-500" />,
    "RESTful API": <TbApi />,
  };

  return (
    <div className="md:p-5 p-3 border rounded-xl flex flex-col gap-4 ">
      <div className="flex  gap-2">
        <div className="bg-gray-300 p-1 rounded-lg shadow-lg h-min w-min">
          <FaBuildingShield className="text-2xl bg-gray-100 rounded-lg p-1" />
        </div>
        <div>
          <div>{experience["company"]}</div>
          <Link
            href={`${experience.companyLink}`}
            target="_blank"
            className="text-xs text-gray-400"
          >
            {experience["companyLink"]}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium text-blue-700">
          {experience["jobTitle"]} -{" "}
          {experience["isIntern"] ? "Internship" : "Job"}
        </h1>
        {experience.description.map((line) => (
          <p className="text-gray-500  text-justify text-ellipsis">{line}</p>
        ))}
        <div className="mt-2 flex max-sm:flex-col gap-2">
          <span className="text-black">Tech-Stacks : </span>
          <div className="flex gap-4 flex-wrap">
            {experience["techStack"].map((tech) => (
              <div className="h-7 w-7 bg-gray-200 rounded-md flex justify-center items-center">
                {techStacks[tech]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xs text-gray-500 ">
        <p>
          From {formatDate(experience["startDate"])} to{" "}
          {formatDate(experience["endDate"])}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
