"use client";
import { useState } from "react";
import Filter from "app/app/components/filter";
import Image from "next/image";

interface Skill {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface FilterData {
  frontendChecked: boolean;
  backendChecked: boolean;
  toolsChecked: boolean;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      src: "/Imagenes/HTML.png",
      alt: "HTML5",
      title: "HTML5",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/css3.png",
      alt: "CSS3",
      title: "CSS3",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/tailwind.png",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/mui.png",
      alt: "Material UI",
      title: "Material UI",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/javascript.png",
      alt: "JavaScript",
      title: "JavaScript",
      category: "BackEnd",
    },
    {
      src: "/Imagenes/ts.png",
      alt: "TypeScript",
      title: "TypeScript",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/php.png",
      alt: "PHP",
      title: "PHP",
      category: "BackEnd",
    },
    {
      src: "/Imagenes/react.png",
      alt: "React JS",
      title: "React JS",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/nextjs.png",
      alt: "Next JS",
      title: "Next JS",
      category: "FrontEnd",
    },
    {
      src: "/Imagenes/mysql.png",
      alt: "MySQL",
      title: "MySQL",
      category: "BackEnd",
    },
    { src: "/Imagenes/git.png", alt: "Git", title: "Git", category: "Tools" },
    { src: "/Imagenes/Wordpress.png", alt: "WordPress", title: "WordPress", category: "Tools" },
  ];

  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  const [filterCriteria, setFilterCriteria] = useState<FilterData>({
    frontendChecked: false,
    backendChecked: false,
    toolsChecked: false,
  });

  const handleFilterChange = (criteria: FilterData) => {
    setFilterCriteria(criteria);
    filterSkills(criteria);
  };

  const filterSkills = (criteria: FilterData) => {
    const { frontendChecked, backendChecked, toolsChecked } = criteria;

    if (!frontendChecked && !backendChecked && !toolsChecked) {
      setFilteredSkills(skills);
      return;
    }

    const filtered = skills.filter((skill) => {
      if (frontendChecked && skill.category === "FrontEnd") return true;
      if (backendChecked && skill.category === "BackEnd") return true;
      if (toolsChecked && skill.category === "Tools") return true;
      return false;
    });

    setFilteredSkills(filtered);
  };

  return (
    <section id="skills" className="flex lg:mx-24 mt-24 md:mx-20">
      <div className=" flex flex-col max-w-[700px] w-full mx-auto">
        <div className=" flex w-full justify-center sm:px-12 md:px-0">
          <h2 className="lg:text-[20px] text-white text-[20px] px-2 w-auto bg-[#5d1d29e6] rounded-md shadow-lg drop-shadow-lg">
            Skills
          </h2>
          <hr className="mt-5 border-t-0.5 border-[#5d1d29e6] flex-grow " />
        </div>

        <div className="lg:bg-[#080808] shadow-lg w-full h-full lg:p-3 px-4 md:my-3 justify-center rounded-2xl flex flex-col">
          <Filter onChange={handleFilterChange} />
          <ul className="flex flex-wrap justify-center my-9 sm:px-0 px-3">
            {filteredSkills.map((skill, index) => (
              <li key={index} className="ml-4 mb-4 animate-bounce-slow">
                <div className="flex justify-center items-center w-24 h-24 bg-white p-5 rounded-[22px] transition-transform transform hover:scale-105 hover:shadow-xl">
                  <img src={skill.src} alt={skill.alt} title={skill.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
