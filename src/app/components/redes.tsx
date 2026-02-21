import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function RedesSociales() {
  return (
    <div className="lg:flex flex-col fixed left-20 bottom-0 hidden">
      <ul className=" space-y-4 after:block after:w-0.5 after:h-[100px] after:bg-[#5d1d29e6] after:m-auto after:mt-5  ">
        <li>
          <a
            href="https://github.com/ValenMir18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b1b1b1] text-white"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "1.5rem" }}
              title="Github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/prasca.v_?igsh=MXFmYXFyZ3VnbDg4NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b1b1b1] text-white"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "1.5rem" }}
              title="Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/prasca.v_?igsh=MXFmYXFyZ3VnbDg4NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b1b1b1] text-white"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ fontSize: "1.5rem" }}
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
              style={{ fontSize: "1.5rem" }}
              title="Linkedin"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
