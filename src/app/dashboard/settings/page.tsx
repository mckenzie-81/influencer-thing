import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account settings. More options will be available here soon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Settings page is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
