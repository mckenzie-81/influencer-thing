import { creators } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, Instagram } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import ServiceCard from '@/components/creators/service-card';
import { Twitter } from 'lucide-react';

type CreatorProfilePageProps = {
  params: { username: string };
};

export default async function CreatorProfilePage({ params }: CreatorProfilePageProps) {
  const creator = creators.find((c) => c.username === params.username);

  if (!creator) {
    notFound();
  }

  return (
    <div className="bg-muted/30 pt-16">
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-6">
                    <Card className="overflow-hidden text-center">
                        <CardContent className="p-6">
                            <Avatar lg>
                                <AvatarImage src={creator.profilePictureUrl} alt={creator.name} />
                                <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <h1 className="text-2xl font-bold">{creator.name}</h1>
                                {creator.isVerified && <BadgeCheck className="w-6 h-6 text-primary" />}
                            </div>
                            <p className="text-muted-foreground">@{creator.username}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>About</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">{creator.bio}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {creator.categories.map((category) => (
                                    <Badge key={category} variant="secondary">{category}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Socials</CardTitle></CardHeader>
                        <CardContent className="space-y-2">
                            {creator.socials.instagram && 
                                <a href={`https://instagram.com/${creator.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                                    <Instagram className="w-4 h-4" /> <span>{creator.socials.instagram}</span>
                                </a>
                            }
                            {creator.socials.twitter && 
                                <a href={`https://twitter.com/${creator.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                                    <Twitter className="w-4 h-4" /> <span>{creator.socials.twitter}</span>
                                </a>
                            }
                            {creator.socials.tiktok && 
                                <a href={`https://tiktok.com/@${creator.socials.tiktok}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="shrink-0" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/></svg>
                                    <span>{creator.socials.tiktok}</span>
                                </a>
                            }
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Services</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {creator.services.map(service => (
                                <ServiceCard key={service.id} service={service} creatorUsername={creator.username} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Availability</h2>
                        <Card>
                            <CardContent className="p-2 flex justify-center">
                                <Calendar
                                    mode="single"
                                    // In a real app, this would be interactive and show available slots.
                                    // For this MVP, it's just a visual representation.
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// Custom Avatar with lg size
function Avatar({ children, lg }: { children: React.ReactNode, lg?: boolean }) {
    return <div className={`relative flex shrink-0 overflow-hidden rounded-full ${lg ? 'h-32 w-32 mx-auto' : 'h-10 w-10'}`}>{children}</div>
}
function AvatarImage({ src, alt }: { src: string, alt: string }) {
    return <Image src={src} alt={alt} fill className="aspect-square h-full w-full object-cover" />
}
function AvatarFallback({ children }: { children: React.ReactNode }) {
    return <div className="flex h-full w-full items-center justify-center rounded-full bg-muted font-bold text-4xl">{children}</div>
}
