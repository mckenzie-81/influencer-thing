import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import type { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  creatorUsername: string;
}

export default function ServiceCard({ service, creatorUsername }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription className="line-clamp-2">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{service.duration} minutes</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-foreground">${service.price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/${creatorUsername}/book?serviceId=${service.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
