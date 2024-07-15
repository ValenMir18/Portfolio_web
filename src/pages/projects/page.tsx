"use client";
import Cards from "app/app/components/cards";

export default function Projects() {
  return (
    <section id="projects" className="flex mt-24">
      <div className="flex flex-col lg:mx-0 mx-16">
        <div className=" flex mb-5 justify-center ">
          <h2 className="lg:text-[24px] text-[26px] bg-[#0a192fee] rounded-md shadow-lg drop-shadow-lg px-2 text-white">
            Projects
          </h2>
          <hr className="mt-5 border-t-0.5 border-rose-600 flex-grow" />
        </div>
        <Cards />
      </div>
    </section>
  );
}
