'use client';

// components
import AuthClassicLayout from 'src/layouts/auth/classic';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthClassicLayout title="Manage your Personal Finance more effectively with  Adam Levy Personal Finance">
      {children}
    </AuthClassicLayout>
  );
}
