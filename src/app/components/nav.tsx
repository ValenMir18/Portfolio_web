"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:py-2 md:py-5 lg:px-7 flex sticky top-0 z-50 justify-between items-center ">
      <div className="flex">
        <Link href={"/"}>
          <Image
            src="/imagenes/valdev.png"
            alt="Icono"
            className=" lg:h-10 lg:w-26 lg:m-4 h-12 w-36 m-2 ml-4"
          />
        </Link>
      </div>

      {/* nav en grande */}
      <div className="contenedor hidden lg:flex ml-auto ">
        <ol className="flex space-x-12 uppercase right-20">
          <li className="nav-item">
            <Link href={"#about"} className={` hover:text-gray-500 `}>
              <span className="text-[12px]">About</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"#skills"} className={` hover:text-gray-500 `}>
              <span className="text-[12px]">Skills</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"#projects"} className={` hover:text-gray-500 `}>
              <span className="text-[12px]">Projects</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"#contact"} className={` hover:text-gray-500 `}>
              <span className="text-[12px]">Contact</span>
            </Link>
          </li>
        </ol>
      </div>

      <div className="ml-5 md:mr-5 hidden lg:flex">
        <a href="cvVALENTINA.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border border-rose-600 p-2 hover:bg-rose-600 rounded-md">
            Resume
          </button>
        </a>
      </div>

      {/* Menú hamburguesa */}
      <button
        onClick={toggleMenu}
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className=" inline-flex lg:hidden items-center justify-center p-2 w-14 h-14 text-sm text-gray-500 rounded-lg mr-8"
        aria-controls="navbar-hamburger"
         aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <svg
            className="w-12 h-12 transition-transform transform rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        )}
      </button>

      <div className={`${isOpen ? "absolute" : "hidden"} bg-gray-800 min-h-fit static left-0 top-[90%] w-full lg:hidden flex items-center justify-center py-5`}>
      <ol className="flex flex-col w-full uppercase items-center gap-2 right-20 ">
          <li className="flex justify-center w-full border border-gray-700 hover:bg-gray-700 py-2">
            <Link href={"#about"} className={` hover:text-gray-500 `}>
              <span className="text-[22px]">About</span>
            </Link>
          </li>

          <li className="flex justify-center w-full border border-gray-700 hover:bg-gray-700 py-2">
            <Link href={"#skills"} className={` hover:text-gray-500 `}>
              <span className="text-[22px]">Skills</span>
            </Link>
          </li>

          <li className="flex justify-center w-full border border-gray-700 hover:bg-gray-700 py-2">
            <Link href={"#projects"} className={` hover:text-gray-500 `}>
              <span className="text-[22px]">Projects</span>
            </Link>
          </li>

          <li className="flex justify-center w-full border border-gray-700 hover:bg-gray-700 py-2">
            <Link href={"#contact"} className={` hover:text-gray-500 `}>
              <span className="text-[22px]">Contact</span>
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
