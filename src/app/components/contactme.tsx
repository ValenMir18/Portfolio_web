'use client'

import React from "react";

export default function ContactMeLink() {
  const scrollToContact = (event: any) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-9">
      <a href="#contact" onClick={scrollToContact} className="hover:bg-[#6f2532e6] bg-[#5d1d29e6] p-3 rounded-md sm:text-[16px] lg:text-[18px] text-white text-xl">
        Contact me!
      </a>
    </div>
  );
}