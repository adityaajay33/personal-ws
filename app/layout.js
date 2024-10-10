// app/layout.tsx
import styles from '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aditya Ajay',
  description: "Aditya Ajay's Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
