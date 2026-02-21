import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactMeLink from "./components/contactme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";

config.autoAddCss = false;

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center columns-2 xs:mb-24 xs:mt-8 lg:flex-row lg:my-12 md:mx-16 sm:mx-16"
    >
      <div className="text-center md:px-9 md:ml-10 lg:text-left lg:w-[900px]">
        <h1 className="font-bold lg:text-5xl sm:text-4xl tracking-tight text-slate-200">
          VALENTINA MIRANDA
        </h1>
        <h2 className="my-3 lg:text-[20px] text-2xl md:text-[14px] tracking-tight text-slate-400">
          Web Developer
        </h2>
        <p className="my-4 text-base md:text-2xl lg:text-lg lg:w-[500px] lg:text-justify text-center text-slate-200 tracking-tight ">
          Hi, welcome to my digital corner, where lines of code tell stories. I
          am a software developer dedicated to creating innovative solutions
          that transform ideas into reality.
        </p>
        <div className="flex lg:hidden justify-center my-8 pb-4 ">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/ValenMir18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b1b1b1] text-white"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: "1.8rem" }}
                  title="Github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ValenMir18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b1b1b1] text-white"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "1.8rem" }}
                  title="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ValenMir18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b1b1b1] text-white"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ fontSize: "1.8rem" }}
                  title="X"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/valenmiranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b1b1b1] text-white"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "1.8rem" }}
                  title="Linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <ContactMeLink />
      </div>

      <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-bounce-slow">
        <Image
          src="/Imagenes/portada.jpg"
          alt="Avatar"
          fill
          className="object-cover rounded-full transform-gpu"
          priority
        />
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
      </div>
      
    </section>
  );
}
