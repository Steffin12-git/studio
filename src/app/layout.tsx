import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import '@fontsource/playfair-display'; // Supports weights 400-900
import '@fontsource/pt-sans'; // Supports weights 400, 700
import Image from 'next/image';
import Chatbot from '@/components/common/Chatbot';

export const metadata: Metadata = {
  title: 'Steffin Thomas | Data Analyst Portfolio',
  description: 'A professional portfolio showcasing the projects and skills of Steffin Thomas, a results-driven Data Analyst.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-body antialiased relative`}
      >
        <div className="fixed inset-0 -z-20 h-full w-full bg-background">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="relative z-10">{children}</div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
