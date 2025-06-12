// Simple header: logo + transparent nav buttons for each page
'use client'
import Link from 'next/link'

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Media', href: '/media' },
  { name: 'LinkedIn', href: '/linkedin' },
  { name: 'Blog', href: '/blog' },
  { name: 'References', href: '/references' },
  { name: 'Updates', href: '/updates' },
]

export default function Header() {
  return (
    <header className="w-full border-b bg-background/80 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="font-bold text-lg">Business Law Text</span>
        <nav className="flex gap-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="bg-transparent hover:bg-accent/30 px-3 py-1 rounded transition-colors"
            >
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 