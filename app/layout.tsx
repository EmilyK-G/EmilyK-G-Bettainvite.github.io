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
      <body className='mb-0'>
        {children}
      </body>
    </html>
  )
}
