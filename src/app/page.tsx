'use client';

import { useState } from 'react';
import { creators as allCreators } from '@/lib/placeholder-data';
import CreatorMarqueeCard from '@/components/creators/creator-marquee-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/creators?q=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push('/creators');
    }
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-3.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center p-4 space-y-8 mt-[-10vh]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-5xl">
            made for creators and industry professionals
          </h1>
          <div className="w-full max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for a creator..."
                className="w-full pl-12 pr-4 py-6 rounded-full text-lg bg-transparent border-border focus:bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </section>

      <section id="creators" className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
                A Powerful Creator Ecosystem
            </h2>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden group">
            <div className="flex space-x-6 animate-marquee group-hover:paused">
              {[...allCreators, ...allCreators].map((creator, index) => (
                <CreatorMarqueeCard key={`${creator.id}-${index}`} creator={creator} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Everything You Need To Succeed.
            <br />
            In One Platform.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Whether you're a creator looking to monetize your passion or a user searching for exclusive access, we have you covered.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link href="/signup">For Creators</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/creators">Find a Creator</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
