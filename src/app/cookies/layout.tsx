import MainLayout from '@/components/layout/MainLayout';

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
