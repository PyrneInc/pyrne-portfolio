import Link from "next/link"

export default function Header() {

  const links = [
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
              className="relative group text-metallicGrey transition"
            >
              {link.name}
              <span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-electricBlue group-hover:w-full transition-all">

              </span>
            </Link>
          ))
        }
      </nav>
    </header>
  )
}