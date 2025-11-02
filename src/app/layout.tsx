import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sajid Software Company - Building the Future of Software Intelligence',
  description: 'Sajid Software creates intelligent, scalable, and design-driven solutions that empower innovation. Premium software development, AI solutions, and digital consulting.',
  keywords: 'software development, AI solutions, web development, mobile apps, cloud services, digital consulting, automation, startups',
  authors: [{ name: 'Sajid Software Company' }],
  creator: 'Sajid Software Company',
  publisher: 'Sajid Software Company',
  openGraph: {
    title: 'Sajid Software Company - Building the Future of Software Intelligence',
    description: 'Sajid Software creates intelligent, scalable, and design-driven solutions that empower innovation.',
    url: 'https://sajidsoftware.com',
    siteName: 'Sajid Software Company',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sajid Software Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sajid Software Company - Building the Future of Software Intelligence',
    description: 'Sajid Software creates intelligent, scalable, and design-driven solutions that empower innovation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}