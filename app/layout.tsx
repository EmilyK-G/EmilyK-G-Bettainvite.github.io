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
          <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
          <title>Lightvite</title>
        </head>
        <body className='mb-0 bg-th-primary-medium'>
          {children}
        </body>
      </html>
  )
}
