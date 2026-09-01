import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Aditya Ajay',
  description: "Aditya Ajay's Portfolio"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="container">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
