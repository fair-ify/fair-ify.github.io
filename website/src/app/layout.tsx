import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fairify.ai - Your Data, Now FAIR and Everywhere',
  description: 'Revolutionizing data sharing with privacy-preserving FAIR principles. Making data Findable, Accessible, Interoperable, and Reusable while protecting your privacy.',
  keywords: 'FAIR data, data sharing, privacy, interoperability, data accessibility, research data, data economy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
