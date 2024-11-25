import Link from "next/link";
import { FaReact, FaVuejs, FaNodeJs, FaPython } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
    return (
        <>
            <section id="skills" className="py-16">
                <div className="skills max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl text-yellow-500 font-semibold">Skills</h2>
                    <p className="text-lg mt-4 text-metallicGrey">
                        Technologies and Tools I excel in.
                    </p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* <div className="mt-8 flex flex-wrap justify-center gap-6"> */}
                        <Skill name="React" Icon={<FaReact className="size-6 text-blue-600" />} />
                        <Skill name="Vue" Icon={<FaVuejs className="size-6 text-green-600" />} />
                        <Skill name="Svelte" Icon={<RiSvelteFill className="size-6 text-orange-600" />} />
                        <Skill name="Node Js" Icon={<FaNodeJs className="size-6 text-green-600" />} />
                        <Skill name="TypeScript" Icon={<SiTypescript className="size-6 text-blue-600" />} />
                        <Skill name="Python" Icon={<FaPython className="size-6 text-blue-600" />} />
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="experience max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl text-yellow-500 font-semibold">Experience</h2>
                    <p className="text-lg mt-4 text-metallicGrey">
                        Work and contributions that showcase my expertise.
                    </p>
                    <div className="mt-8 space-y-8">
                        <div className="flex flex-col items-center md:flex-row justify-between">
                            {
                                experiences.map((experience, index) => (
                                    <ExperienceCard key={index} experience={experience} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


type SkillProps = {
    name: string;
    Icon: React.ReactNode;
}

const Skill = ({ name, Icon }: SkillProps) => {
    return (
        <div className="bg-gray-700 text-center w-36 p-4 rounded-lg flex flex-col items-center">
            {Icon}
            <h4 className="text-xl mt-4 text-white">{name}</h4>
        </div>
    )
}


type Experience = {
    role: string;
    company: string;
    from: string; // Format: "Mon YYYY" (e.g., "Jan 2022")
    to: string | "Present"; // "Present" for ongoing roles
    description: string;
    website: string;
};

type ExperienceCardProps = {
    experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className="flex-1 text-left">
            <h4 className="text-2xl text-white">{experience.role}</h4>
            <p className="mt-2 text-metallicGrey">
                {experience.company}
            </p>
            <p className="mt-2 text-metallicGrey text-xs">
                {experience.from} - {experience.to}
            </p>
            <p className="mt-4 text-gray-300">{experience.description}</p>

            <Link href={experience.website} className="mt-4 mx-auto">
                Visit Company
            </Link>
        </div>
    )
}

const experiences: Experience[] = [
    {
        role: "Software Engineer",
        company: "Tech Innovations Ltd",
        from: "Jan 2022",
        to: "Present",
        description:
            "Worked on developing scalable web applications using React and Node.js. Improved system efficiency by 30% through optimized algorithms.",
        website: "https://techinnovations.com",
    },
    {
        role: "Frontend Developer",
        company: "Creative Design Co.",
        from: "Mar 2020",
        to: "Dec 2021",
        description:
            "Built responsive user interfaces and collaborated with the design team to implement sleek, user-friendly web designs.",
        website: "https://creativedesign.com",
    },
    {
        role: "Intern",
        company: "Startup Hub",
        from: "Jun 2019",
        to: "Feb 2020",
        description:
            "Assisted in building prototypes for new ideas and developed small features for internal tools using Python and Flask.",
        website: "https://startuph.com",
    },
];
