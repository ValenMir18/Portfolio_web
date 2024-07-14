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
      <a href="#contact" onClick={scrollToContact} className="hover:bg-rose-900 bg-rose-700 p-3 rounded-md lg:text-[18px] text-white text-2xl">
        Contact me!
      </a>
    </div>
  );
}