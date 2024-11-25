import About from "@/components/about/About";
import ContactMe from "@/components/contact-me/ContactMe";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import ParticlesBackground from "@/components/particles-background/ParticlesBackground";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
     <Script
        src="https://cdn.jsdelivr.net/npm/particles.js"
        strategy="lazyOnload"
      />
      <Header />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
      <ParticlesBackground />
    </>
  )
}