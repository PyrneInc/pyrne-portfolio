import Link from "next/link";

const IMG = `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`


export default function HeroSection() {
    return (
        <section
            id="home"
            className="
                min-h-screen 
                flex flex-col lg:flex-row items-center justify-between 
                px-6 lg:px-20 py-16"
        >
            <div className="flex-1 text-center lg:text-left">
                <h1 className="
                        text-white text-4xl lg:text-6xl font-bold 
                        opacity-0 animate-fade-in delay-500
                ">
                    Hi, I'm <span className="text-electricBlue">Mark Mwangi</span>
                </h1>
                <p className="
                        text-metallicGrey mt-2
                        opacity-0 animate-fade-in delay-1000
                ">
                    A Software Engineer passionate about building innovative solutions.
                </p>
                {/** Call to Actions */}
                <div className="
                        mt-8 
                        flex flex-col lg:flex-row gap-4 justify-center lg:justify-start 
                        opacity-0 animate-fade-in delay-1000
                ">
                    <Link
                        href="#contact-me"
                        className="
                            bg-electricBlue text-white 
                            py-2 px-6 rounded-full
                            text-lg font-semibold 
                            hover:bg-neonGreen hover:scale-105
                            transition-transform duration-300"
                    >
                        Contact Me
                    </Link>
                    <Link href="#projects"
                        className="
                            border border-electricBlue text-electricBlue 
                            py-2 px-6  rounded-full 
                            text-lg font-semibold 
                            hover:bg-electricBlue hover:text-white hover:scale-105
                            transition-transform duration-300"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
            <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
                <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                    <img src={IMG} alt="Mark Mwangi"
                        className="w-96 h-full rounded-full shadow-lg border border-metallicGrey"
                    />
                    <div className="absolute inset-0 border-[4px] border-electricBlue rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}