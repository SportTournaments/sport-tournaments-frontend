import MainLayout from '@/components/layout/MainLayout';

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
