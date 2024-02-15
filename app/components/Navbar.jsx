import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  }
]

const Navbar = () => {
  return (
    <nav className='container mx-auto fixed left-0 right-0 flex justify-between items-center w-full'>
        <Link href={'/'}>Logo</Link>

        <div className='burger'></div>
        <ul className='menu'>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navbar