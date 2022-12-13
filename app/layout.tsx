import '../styles/globals.css';
import { Dancing_Script } from '@next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing-script',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${dancingScript.variable} font-sans`}>
      <head>
        <title>Bettainvite</title>
      </head>
      <body className='mb-0 bg-champagne'>
        {children}
      </body>
    </html>
  )
}
