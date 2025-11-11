import type { Creator } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const minPrice = creator.services.length > 0
    ? Math.min(...creator.services.map(s => s.price))
    : 0;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex-row items-start gap-4 p-4">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={creator.profilePictureUrl} alt={creator.name} />
          <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{creator.name}</h3>
            {creator.isVerified && (
              <BadgeCheck className="w-5 h-5 text-primary" />
            )}
          </div>
          <p className="text-sm text-muted-foreground">@{creator.username}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
          {creator.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {creator.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-muted/50 flex justify-between items-center">
        <div>
          <p className="text-xs text-muted-foreground">Starts from</p>
          <p className="font-bold text-lg">${minPrice}</p>
        </div>
        <Button asChild>
          <Link href={`/${creator.username}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
