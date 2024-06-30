import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from 'next/dynamic'

import Header from '@/components/header'
import { siteConfig } from '../config/site'


const DrawerIcon = dynamic(() => import('@/components/drawer'), { ssr: false })
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://abarasihart.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://res.cloudinary.com/',
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/',
        width: 1800,
        height: 1600,
        alt: 'alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['https://res.cloudinary.com/'],
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className='md:flex hidden'>
              <Header />
            </div>
            {children}
            <Analytics />
            <SpeedInsights />
            <div className='flex md:hidden fixed top-5 right-4 bg-primary-foreground text-primary rounded shadow-xl hover:bg-slate-200 p-1'>
              <DrawerIcon />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
