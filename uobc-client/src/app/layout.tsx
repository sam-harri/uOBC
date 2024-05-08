import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'uOBC',
  description: 'Univerity of Ottawa Signup Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <Head>
              <link rel="icon" href="/favicon.ico" type="image/x-icon" />
              <title>Your Website Title</title>
          </Head>
          <body>
              {children}
          </body>
      </html>
  );
}
