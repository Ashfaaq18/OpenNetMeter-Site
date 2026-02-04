import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenNetMeter - Network Monitor for Windows',
  description: 'A simple program to monitor your network/data usage. Made for the average Windows user. The open-source Community edition is free, with a Pro edition coming soon.',
  keywords: ['network monitor', 'data usage', 'windows', 'bandwidth', 'open source'],
  authors: [{ name: 'Ashfaaq' }],
  openGraph: {
    title: 'OpenNetMeter - Network Monitor for Windows',
    description: 'A simple program to monitor your network/data usage. The open-source Community edition is free, with a Pro edition coming soon.',
    url: 'https://opennetmeter.com',
    siteName: 'OpenNetMeter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenNetMeter - Network Monitor for Windows',
    description: 'A simple program to monitor your network/data usage. The open-source Community edition is free, with a Pro edition coming soon.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
