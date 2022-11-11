import { Dancing_Script } from '@next/font/google';

const dancingScript = Dancing_Script();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={dancingScript.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
