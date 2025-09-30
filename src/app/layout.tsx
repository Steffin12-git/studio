import type { Metadata } from 'next';
import './globals.css';
import './gradient.css';
import { Toaster } from '@/components/ui/toaster';
import '@fontsource/playfair-display'; // Supports weights 400-900
import '@fontsource/pt-sans'; // Supports weights 400, 700
import Image from 'next/image';
import Chatbot from '@/components/common/Chatbot';
import Script from 'next/script';

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
       <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8WGT855Z09" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8WGT855Z09');
          `}
        </Script>
       </head>
       <body
        className={`font-body antialiased relative`}
      >
        <div className="fixed inset-0 -z-20 h-full w-full bg-background">
        </div>

        {/* Animated Gradient Background */}
        <div className="gradient-bg">
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
          </div>
        </div>

        <div className="relative z-10">{children}</div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
