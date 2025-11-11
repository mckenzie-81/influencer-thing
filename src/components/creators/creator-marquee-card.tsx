import type { Creator } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface CreatorMarqueeCardProps {
  creator: Creator;
}

export default function CreatorMarqueeCard({ creator }: CreatorMarqueeCardProps) {
  return (
    <Link href={`/${creator.username}`}>
        <div className="relative w-64 h-80 rounded-lg overflow-hidden group/card transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Image
                src={creator.profilePictureUrl}
                alt={creator.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold text-lg">{creator.name}</h3>
                {creator.categories[0] && <p className="text-sm opacity-80">{creator.categories[0]}</p>}
            </div>
        </div>
    </Link>
  );
}
