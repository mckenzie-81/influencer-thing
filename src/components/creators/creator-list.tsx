'use client';

import type { Creator } from '@/lib/types';
import CreatorCard from './creator-card';

interface CreatorListProps {
  creators: Creator[];
}

export default function CreatorList({ creators }: CreatorListProps) {
  if (creators.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p>No creators found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  );
}
