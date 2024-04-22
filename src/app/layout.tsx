import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Content from '@/layouts/Content';
import Header from '@/layouts/Header';
import { ThemeProvider } from '@/layouts/ThemeProvider';
import '@/styles/globals.css';

const inter = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SouthStar.log',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <Content>{children}</Content>
        </ThemeProvider>
      </body>
    </html>
  );
}
