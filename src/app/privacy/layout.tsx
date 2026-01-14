import MainLayout from '@/components/layout/MainLayout';

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
