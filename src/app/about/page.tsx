import { Users, Target, Eye } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About ConnectVerse
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We are dedicated to forging authentic connections in the digital age. Our platform empowers creators to monetize their passion and enables users to gain invaluable access to their heroes.
          </p>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-muted-foreground">
                To create a seamless and trustworthy platform where creators and their communities can connect for personalized, one-on-one interactions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading global marketplace for meaningful digital experiences, breaking down the barriers between creators and their audiences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Our Values</h2>
              <p className="text-muted-foreground">
                Authenticity, empowerment, and community are at the heart of everything we do. We believe in fostering a positive and supportive environment.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NjI1ODg5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              fill
              className="object-cover"
              data-ai-hint="team collaboration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </section>
      </div>
    </div>
  );
}
