import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'uOBC',
  description: 'Univerity of Ottawa Signup Website',
  icons: {
    icon: '/favicon.ico', // Path relative to the public directory
},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <Head>
              <link rel="icon" href="uOBC/favicon.ico" type="image/x-icon" />
          </Head>
          <body>
              {children}
          </body>
      </html>
  );
}
