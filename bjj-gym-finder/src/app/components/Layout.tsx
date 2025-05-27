import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
            CombatMap
            </Link>
            <div className="space-x-4">
              <Link href="/gyms" className="hover:text-gray-300">
                Find Gyms
              </Link>
              <Link href="/trial" className="hover:text-gray-300">
                Book Trial
              </Link>
              <Link href="/waitlist" className="hover:text-gray-300">
                Join Waitlist
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} CombatMap. All rights reserved.</p>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 