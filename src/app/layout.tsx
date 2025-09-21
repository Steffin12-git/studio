import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, Lexend } from 'next/font/google';
import { BackgroundBlobs } from '@/components/common/BackgroundBlobs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
});
const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'My Awesome Portfolio',
  description: 'A portfolio of awesome projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lexend.variable} font-body antialiased relative`}
      >
        <BackgroundBlobs />
        <div className="relative z-10">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
