import MainLayout from '@/components/layout/MainLayout';

export default function GDPRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
