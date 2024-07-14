import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RedesSociales from "./components/redes";
import Nav from "app/app/components/nav";
import CustomCursor from "app/app/components/customCursor";
import ContactMeLink from "./components/contactme";
import About from "../pages/about/page";
import Projects from "../pages/projects/page";
import Contact from "../pages/contact/page";
import Skills from "app/pages/skills/page";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Bienvenido a mi portafolio personal",
  icons: {
    icon: "/Imagenes/iconya.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        <RedesSociales />
        <main className=" lg:py-5 lg:px-24 justify-center">
          {children}
          <div className="flex flex-col items-center justify-center">
            <section
              id="about"
              className=" flex items-center justify-center lg:mb-12"
            >
              <About />
            </section>
            <section
              id="skills"
              className=" flex items-center justify-center lg:mb-12"
            >
              <Skills />
            </section>
            <section
              id="projects"
              className="my-24 lg:mb-24 flex items-center justify-center"
            >
              <Projects />
            </section>
            <section
              id="contact"
              className=" my-24 flex items-center justify-center"
            >
              <Contact />
            </section>
          </div>
        </main>
        <footer className="flex flex-col items-center py-2 text-slate-500">© Built with Next Js by Valentina Miranda | 2024</footer>
      </body>
    </html>
  );
}
