
export default function About() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row lg:mx-24 lg:mt-24 md:mt-12 md:px-12 "
      id="about"
    >
      <div className="flex flex-col md:mx-16 sm:mx-6 xs:mx-10 ">
        <div className="flex items-center justify-between lg:justify-start">
          <h2 className="lg:text-[24px] text-[26px] pl-1 text-white bg-[#0a192fee] rounded-md shadow-lg drop-shadow-lg">
            About me
          </h2>
          <hr className="flex-grow border-t-0.5 border-rose-600 ml-4" />
        </div>

        <div className="lg:bg-[#0a192fee] mt-4 lg:shadow-lg lg:drop-shadow-lg lg:px-7 pb-10 lg:pt-3 md:pt-2 lg:w-[500px] md:w-auto">
          <p className="text-justify tracking-tight lg:text-[16px] text-[25px] mt-4 text-white">
            I am Valentina, a Colombian developer dedicated to building
            memorable web experiences for users.
          </p>
          <p className="text-justify tracking-tight lg:text-[16px] text-[25px] mt-3 text-white">
            I worked closely with the product team at accounting firm {" "}
            <a
              href="https://www.siigo.com/nosotros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Siigo
            </a>,
            where I contributed to the development of innovative tools that
            simplify and improve our users&apos; experience on the firm&apos;s website.
            But my passion for programming goes beyond work hours; Independently
            and as part of my hobby, I immerse myself in creative projects where
            I can explore new ideas and technologies.
          </p>
          <p className="text-justify tracking-tight lg:text-[16px] text-[25px] mt-3 text-white">
            I am committed to my professional and academic growth. I am
            currently studying systems engineering at the University of Córdoba,
            where I am strengthening my skills in the world of code, a journey
            that I began in 2023 and that continues to fill me with excitement
            and constant learning.
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start lg:pt-16 mb-12 mt-2 lg:mt-0">
        <div className="relative w-[250px] h-64">
          <img
            src="/Imagenes/avatar1.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white box-border"></div>
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white box-border transform translate-x-4 translate-y-4 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
