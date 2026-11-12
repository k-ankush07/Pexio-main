import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const links = [
  { label: 'Our Apps', to: '/apps' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About Us', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export default function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-6">
      <nav className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm">
        <Link to="/" className="text-3xl font-bold tracking-tight text-[#1a1a2e]">
          pexio
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-sm text-gray-600 hover:text-[#703CE1]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button arrow>Explore Our Apps</Button>
      </nav>
    </header>
  )
}
