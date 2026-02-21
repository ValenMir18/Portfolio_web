export default function About() {
  return (
    <section className="flex lg:flex-row lg:mx-24 lg:mt-24 md:mt-12 md:px-12 " id="about">
      <div className="flex flex-col md:mx-16 sm:mx-10 xs:mx-10 ">
        <div className="flex items-center justify-between lg:justify-start">
          <h2 className="lg:text-[20px] text-[20px] px-2 text-white bg-[#5d1d29e6] rounded-md shadow-lg drop-shadow-lg">
            About me
          </h2>
          <hr className="flex-grow border-t-0.5 border-[#5d1d29e6] " />
        </div>

        <div className="lg:bg-[#080808] mt-4 lg:shadow-lg lg:drop-shadow-lg lg:px-7 pb-10 lg:pt-3 md:pt-2 lg:w-[700px] md:w-auto">
          <p className="text-justify tracking-tight lg:text-[16px] text-[18px] lg:mt-4 text-white">
            I'm Valentina, a Colombian web developer with professional experience in developing and evolving web applications for the healthcare sector.
          </p>

          <p className="text-justify tracking-tight lg:text-[16px] text-[18px] mt-3 text-white">
            Since November 2024, I've worked at SL Software, where I actively participate in the modification, maintenance, and growth of a clinical laboratory results system, adapting it to the specific requirements of each client.
          </p>

          <p className="text-justify tracking-tight lg:text-[16px] text-[18px] mt-3 text-white">
            I've worked in product-oriented environments, collaborating closely on the implementation of new features, optimization of existing modules, and management of clinical databases, ensuring the stability and integrity of the information.
          </p>

          <p className="text-justify tracking-tight lg:text-[16px] text-[18px] mt-3 text-white">
            In addition, I continue developing personal projects that allow me to explore new technologies and constantly strengthen my technical skills.
          </p>
        </div>
      </div>
      
    </section>
  );
}
