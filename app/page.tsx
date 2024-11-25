import About from "@/components/about/About";
import ContactMe from "@/components/contact-me/ContactMe";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main id="#home">
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
    </>
  )
}