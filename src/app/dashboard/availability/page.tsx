import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function AvailabilityPage() {
  return (
    <div className="space-y-8 max-w-5xl">
       <div>
        <h1 className="text-3xl font-bold mb-2">Availability</h1>
        <p className="text-muted-foreground">Set your weekly hours and block off specific dates.</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Weekly Hours</CardTitle>
                <CardDescription>Set your standard weekly availability.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {weekDays.map(day => (
                    <div key={day} className="flex flex-wrap items-center gap-4 p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                            <Checkbox id={day} defaultChecked={['Monday', 'Tuesday', 'Wednesday'].includes(day)}/>
                            <Label htmlFor={day} className="flex-1 font-medium w-24">{day}</Label>
                        </div>
                        <div className="flex items-center gap-2 flex-grow">
                            <Input type="time" defaultValue="09:00" className="w-full" disabled={!['Monday', 'Tuesday', 'Wednesday'].includes(day)} />
                            <span className="text-muted-foreground">-</span>
                            <Input type="time" defaultValue="17:00" className="w-full" disabled={!['Monday', 'Tuesday', 'Wednesday'].includes(day)}/>
                        </div>
                    </div>
                ))}
                <Button className="mt-4">Save Weekly Hours</Button>
            </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Block Dates</CardTitle>
                <CardDescription>Select specific dates you're unavailable.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Calendar
                    mode="multiple"
                    className="p-0"
                />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
