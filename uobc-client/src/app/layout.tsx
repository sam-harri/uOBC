// app/layout.tsx
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'uOBC',
    description: 'University of Ottawa Signup Website',
    icons: {
        icon: '/favicon.ico', // Path relative to the public directory
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
