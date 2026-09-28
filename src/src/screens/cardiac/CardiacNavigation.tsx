import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CardiacNavigation = () => {
  const location = useLocation()

  // Navigation links with display names
  const navLinks = [
    { path: '/cardiac', label: 'Overview' },
    { path: '/cardiac/i-connect', label: 'I-Connect' },
    { path: '/cardiac/i-flate', label: 'I-Flate' },
    { path: '/cardiac/i-rac', label: 'I-Rac' },
    { path: '/cardiac/i-access', label: 'I-Access' },
    { path: '/cardiac/i-man', label: 'I-Man' },
    { path: '/cardiac/i-sheath', label: 'I-Sheath' },
  ]

  // Check if current path matches exactly this link path
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="px-2 py-4 my-4 bg-gray-100 rounded cardiac-nav">
      <ul className="flex flex-wrap gap-2">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`px-3 py-2 rounded transition ${
                isActive(link.path)
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CardiacNavigation
