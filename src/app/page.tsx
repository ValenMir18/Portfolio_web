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

config.autoAddCss = false;

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center columns-2 xs:mb-24 xs:mt-16 lg:flex-row lg:my-12 md:mx-16 sm:mx-16"
    >
      <div className="text-center md:px-9 md:ml-10 lg:text-left lg:w-[900px]">
        <h1 className="font-bold lg:text-6xl sm:text-5xl text-6xl tracking-tight text-slate-200">
          VALENTINA MIRANDA
        </h1>
        <h2 className="my-3 lg:text-lg text-2xl  tracking-tight text-slate-400">
          Web developer
        </h2>
        <p className="my-4 text-lg lg:w-[550px] lg:text-justify text-center text-slate-500 tracking-tight md:text-2xl ">
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
                className="hover:text-rose-600 text-white"
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
                href="https://www.instagram.com/prasca__v?igsh=MWsybWZqZzYxYXMxeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 text-white"
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
                href="https://twitter.com/valMpr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 text-white"
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
                className="hover:text-rose-600 text-white"
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
      <div className="flex justify-center items-center lg:justify-start lg:pt-16 mb-12 mt-2 lg:mt-0">
        <div className="relative w-[250px] h-[250px] animate-bounce-slow">
          <img
            src="/Imagenes/avatar1.jpg"
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white box-border rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
