import '@/styles/globals.css'
import { Bebas_Neue, Montserrat } from 'next/font/google';

const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue'
});

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'Jacob Moore - Portfolio',
  description: 'Portfolio of recent projects by Jacob Moore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas_neue.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
