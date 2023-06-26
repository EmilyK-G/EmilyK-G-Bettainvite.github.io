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
          <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled'/>
          <title>Lightvite</title>
        </head>
        <body className='mb-0 bg-th-primary-dark'>
            {children}
        </body>
      </html>
  )
}
