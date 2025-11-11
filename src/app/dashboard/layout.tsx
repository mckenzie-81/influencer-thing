import DashboardSidebar from "@/components/layout/dashboard-sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen pt-16">
            <DashboardSidebar />
            <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-muted/40">
                {children}
            </main>
        </div>
    );
}
