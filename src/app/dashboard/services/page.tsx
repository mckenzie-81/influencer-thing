import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { creators } from "@/lib/placeholder-data";
import { PlusCircle, MoreHorizontal, Edit, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function ServicesPage() {
    const userServices = creators[0].services;
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Services</h1>
          <p className="text-muted-foreground">Manage the services you offer to clients.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Service
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {userServices.map(service => (
            <Card key={service.id}>
                <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>${service.price} &middot; {service.duration} mins</CardDescription>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem><Edit className="mr-2 h-4 w-4" /> Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
