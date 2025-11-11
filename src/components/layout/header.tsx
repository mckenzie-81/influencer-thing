'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useScroll } from '@/hooks/use-scroll';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import NavLink from './nav-link';

const navLinks: { href: string, label: string }[] = [
];

// This is a placeholder for user authentication state
const isAuthenticated = false;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(50);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'pt-2' : 'pt-4'
      )}
    >
      <div
        className={cn(
          'container mx-auto px-4 transition-all duration-300',
          isScrolled ? 'max-w-4xl' : 'max-w-7xl'
        )}
      >
        <nav
          className={cn(
            'flex items-center justify-between px-6 py-3 transition-all duration-300',
            isScrolled
              ? 'bg-card/80 backdrop-blur-lg rounded-full shadow-lg border border-border'
              : 'bg-transparent border-transparent'
          )}
        >
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA & Auth */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/signup">for creators</Link>
                </Button>
                <Button asChild>
                  <Link href="/creators">book</Link>
                </Button>
              </>
            )}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-card rounded-xl shadow-lg p-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground py-2 rounded-md text-center font-medium"
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
               <div className="pt-4 border-t border-border flex flex-col gap-2">
                   {isAuthenticated ? (
                     <>
                        <Button variant="outline" asChild onClick={closeMenu}><Link href="/dashboard">Dashboard</Link></Button>
                        <Button variant="destructive" asChild onClick={closeMenu}><Link href="/api/auth/logout">Log Out</Link></Button>
                     </>
                   ) : (
                     <>
                      <Button variant="outline" asChild onClick={closeMenu}><Link href="/signup">For Creators</Link></Button>
                      <Button asChild onClick={closeMenu}><Link href="/creators">book</Link></Button>
                    </>
                   )}
                </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/api/auth/logout">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
