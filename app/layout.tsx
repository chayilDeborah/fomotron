import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open = Open_Sans({  weight: ["400"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', });

export const metadata: Metadata = {
  title: 'FOMOTRON',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open.className}><link rel="icon" href="/favicon.png" sizes="any" />
        {children}</body>
    </html>
  )
}
