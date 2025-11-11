import { creators } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarIcon, Clock, CreditCard } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface BookingPageProps {
  params: { username: string };
  searchParams: { serviceId?: string; date?: string; time?: string };
}

export default async function BookingPage({ params, searchParams }: BookingPageProps) {
  const creator = creators.find((c) => c.username === params.username);
  const service = creator?.services.find((s) => s.id === searchParams.serviceId);

  if (!creator || !service) {
    notFound();
  }
  
  const bookingDate = searchParams.date || new Date().toLocaleDateString('en-CA');
  const bookingTime = searchParams.time || '10:00 AM';

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4 pt-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
            <div className="space-y-6 rounded-lg bg-card p-6">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={creator.profilePictureUrl} alt={creator.name} />
                        <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm text-muted-foreground">You are booking</p>
                        <h2 className="text-lg font-semibold">{creator.name}</h2>
                    </div>
                </div>
                <Separator />
                <div>
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{bookingDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{bookingTime} ({service.duration} min)</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <Separator />
                <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>${service.price.toFixed(2)}</span>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Confirm and Pay</CardTitle>
                    <CardDescription>Complete your booking by providing payment details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label>Payment Details</Label>
                        <div className="border rounded-md p-3 flex items-center gap-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring bg-background">
                            <CreditCard className="w-5 h-5 text-muted-foreground" />
                            <Input className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" placeholder="Card number"/>
                            <Input className="border-0 p-0 h-auto w-20 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" placeholder="MM/YY"/>
                            <Input className="border-0 p-0 h-auto w-16 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" placeholder="CVC"/>
                        </div>
                    </div>
                     <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                      </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg">Confirm Booking (${service.price.toFixed(2)})</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
