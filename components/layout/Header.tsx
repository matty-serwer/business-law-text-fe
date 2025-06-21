// Simple header: logo + transparent nav buttons for each page + mobile menu
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Updates', href: '/updates' },
  { name: 'Media', href: '/media' },
  { name: 'Related', href: '/related' },
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="w-full h-22 bg-background sticky top-0 z-30 flex items-center">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <h2 id="textbook-logo" className="text-slate-900 text-shadow-lg/10 text-shadow-blue-700 flex flex-col items-center leading-8">
          <span>Business Law</span>
          <span className="text-3xl tracking-widest">Textbook</span>
        </h2>

        {/* Desktop Navigation - Hidden on large and below screens */}
        <div className="hidden lg:flex items-center gap-4">
          <nav className="flex gap-2">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-transparent hover:bg-accent/30 px-3 py-1 rounded transition-colors text-lg"
              >
                {page.name}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            variant="accent"
            size="default"
            className="ml-2 shadow-lg/10 shadow-blue-700"
          >
            <Link
              href="https://collegepublishing.sagepub.com/products/business-law-1-298068"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation - Shown on large and below screens */}
        <div className="lg:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {pages.map((page) => (
                <DropdownMenuItem key={page.href} asChild>
                  <Link href={page.href}>{page.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link
                  href="https://collegepublishing.sagepub.com/products/business-law-1-298068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  Purchase
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
} 