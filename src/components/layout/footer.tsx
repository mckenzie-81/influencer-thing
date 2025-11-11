import Link from 'next/link';
import { Logo } from '@/components/icons/logo';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ConnectVerse. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
