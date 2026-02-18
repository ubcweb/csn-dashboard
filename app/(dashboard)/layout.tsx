import MainLayout from "@/components/MainLayout/MainLayout";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MainLayout>
            <section className="pt-5 pb-12 px-3 md:px-5 xl:px-6">
                {children}
            </section>
        </MainLayout>
    );
}