import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/NovaCare_Logo.svg"     // or NovaCare_Logo_Transparent.svg
          alt="NovaCare Nursing Logo"
          width={200}
          height={100}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="space-x-6 text-blue-900 font-medium">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
