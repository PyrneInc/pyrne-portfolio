import About from "@/components/about/About";
import ContactMe from "@/components/contact-me/ContactMe";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
    </>
  )
}