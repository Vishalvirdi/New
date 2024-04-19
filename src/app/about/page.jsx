import About_Card from "@/components/molecules/About_Card";
import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";

export default function About() {
  return (
    <div className="md:w-[700px] w-full flex flex-col gap-4 duration-700">
      <About_Card
        name={"IIITUNA"}
        web={"https://iiitu.ac.in"}
        duration={"2020 - 2024"}
        title={
          "Indian Institute of Information Technology, Una ( Himachal Pradesh )"
        }
        description={
          "At IIIT Una, as a BTech IT student, I immerse myself in vital subjects like DSA, Computer Networks, OOPs, DBMS, and OS. Through intensive training and hands-on experience, I grasp fundamental concepts crucial for today's IT landscape. IIIT Una cultivates an interactive learning environment, molding me into a proficient IT professional ready to thrive and innovate in real-world settings."
        }
      />
      <About_Card
        name={"S.T. College of Nursing & Medical Sciences"}
        web={"https://stnursinginstitute.in"}
        title={
          "S.T. College of Nursing & Medical Sciences, Hoshiarpur (Punjab)"
        }
        description={
          "S.T. College of Nursing & Medical Sciences, a private institution in Punjab, provided me with a comprehensive education, where I completed my 12th grade with PCM. Additionally, I actively participated in the college cricket team matches, honing not only my academic skills but also my sporting abilities, fostering a well-rounded development during my time there."
        }
      />
      <About_Card
        name={"G.S.S.S Shergarh"}
        web={"https://stackschools.com/schools/03050506702/gsss-shergarh"}
        title={
          "Government Senior Secondary School Shergarh , Hoshiarpur (Punjab)"
        }
        description={
          "At G.S.S.S Shergarh, Hoshiarpur, I completed my schooling up to 10th grade, where I excelled academically, receiving recognition as one of the top 20 students with high marks among government schools. Moreover, I actively engaged in sports, particularly football and cricket, contributing to a balanced and fulfilling educational experience."
        }
      />
    </div>
  );
}
