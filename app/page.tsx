import About from "@/components/about/About";
import ContactMe from "@/components/contact-me/ContactMe";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// lazy load particles background
const ParticlesBackground = dynamic(
  () => import("@/components/particles-background/ParticlesBackground")
)

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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