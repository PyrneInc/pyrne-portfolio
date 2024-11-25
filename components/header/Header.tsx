import Link from "next/link"

export default function Header() {

    const links = [
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'Projects',
            href: '#projects'
        },
        {
            name: 'Skills',
            href: '#skills'
        },
        {
            name: 'Contact Me',
            href: '#contact-me'
        }
    ]
    return (
        <header className="p-4 flex justify-between">
            <div className="logo">
                <span className="text-electricBlue font-bold text-lg">Mark Mwangi</span>
            </div>
            <nav className="flex gap-6 text-metallicGrey">
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="hover:text-electricBlue transition"
                        >
                            {link.name}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}