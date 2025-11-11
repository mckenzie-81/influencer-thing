'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { creators as allCreators } from '@/lib/placeholder-data';
import CreatorList from '@/components/creators/creator-list';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { Creator } from '@/lib/types';

function CreatorSearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>([]);

  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const results = allCreators.filter(creator =>
      searchTerm === '' ||
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCreators(results);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 min-h-[calc(100vh-15rem)] pt-24">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 pt-8">Find Your Creator</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name, category, or keyword..."
            className="w-full pl-12 pr-4 py-6 rounded-full text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <CreatorList creators={filteredCreators} />
    </div>
  );
}

export default function CreatorSearchPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreatorSearchPage />
    </Suspense>
  )
}
