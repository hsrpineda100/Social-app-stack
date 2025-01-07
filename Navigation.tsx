import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, User } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-2">
          <NavItem href="/" icon={<Home />} isActive={pathname === '/'} />
          <NavItem href="/search" icon={<Search />} isActive={pathname === '/search'} />
          <NavItem href="/profile" icon={<User />} isActive={pathname === '/profile'} />
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, icon, isActive }: { href: string; icon: React.ReactNode; isActive: boolean }) {
  return (
    <Link href={href} className={`p-2 rounded-full ${isActive ? 'bg-gray-200' : ''}`}>
      {icon}
    </Link>
  )
}

