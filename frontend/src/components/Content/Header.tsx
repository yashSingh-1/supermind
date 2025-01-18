import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          App Idea
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

