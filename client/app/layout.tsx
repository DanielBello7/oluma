import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Container } from './container';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crypto Finance',
  description:
    'A comprehensive dashboard for managing financial transactions, approvals, and users with Web3 integration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Container>{children}</Container>
        <Toaster />
      </body>
    </html>
  );
}
