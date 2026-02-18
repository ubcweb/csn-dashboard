import MainLayout from "@/components/MainLayout/MainLayout";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MainLayout>
            <section className="pt-3 pb-12 px-3 pl-6 pr-10">
                {children}
            </section>
        </MainLayout>
    );
}