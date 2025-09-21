import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, Lexend } from 'next/font/google';
import Image from 'next/image';

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
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image
            src="https://picsum.photos/seed/background/1920/1080"
            alt="Abstract background image"
            fill
            className="object-cover"
            data-ai-hint="abstract background"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl backdrop-saturate-150" />
        </div>
        <div className="relative z-10">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
