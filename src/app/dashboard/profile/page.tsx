import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  const verificationCode = "CV-XYZ-123";

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile & Verification</h1>
        <p className="text-muted-foreground">Manage your public profile and verify your social media accounts.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Public Profile</CardTitle>
          <CardDescription>This information will be displayed on your public page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Alice Johnson" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="alicej" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" defaultValue="Digital artist and content creator sharing my journey. I offer personalized art critiques and tutorials." />
          </div>
          <div className="space-y-2">
            <Label>Profile Picture</Label>
            <Input type="file" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Media Verification</CardTitle>
          <CardDescription>Verify ownership of your social accounts to get the verified badge.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
              <li>Enter your social media username (e.g., Instagram).</li>
              <li>We'll give you a unique code: <span className="font-mono bg-background px-2 py-1 rounded">{verificationCode}</span></li>
              <li>Post this code in your bio or as a new post.</li>
              <li>Paste the link to your profile or post below and click verify.</li>
            </ol>
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagram">Instagram Username</Label>
            <Input id="instagram" placeholder="your_instagram" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="verificationLink">Verification Link</Label>
            <Input id="verificationLink" placeholder="https://www.instagram.com/p/Cxyz..." />
          </div>
          <Button>Verify Instagram</Button>
        </CardContent>
      </Card>
    </div>
  );
}
