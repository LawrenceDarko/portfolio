import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Space_Mono } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import Navbar from './components/Navbar'
import Modal from './components/modal/Modal'
import { GeneralContextProvider } from './contexts/GeneralContext'
import { ThemeProvider } from "next-themes"
import Providers from './components/providers';

// const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Lawrence Darko',
  description: 'Personal porfolio website',
  keywords: ["Portfolio", "JavaScript", "TypeScript"]
}

const font = Nunito({
  subsets: ['latin'],
})

const space = Space_Mono({
  subsets: ['vietnamese'],
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <GeneralContextProvider>
        <html lang="en">
          <body className={`${space.className} bg-[#25262A]`}>
            <Providers>
                <Modal />
                <Navbar />
                <Analytics />
                  {children}
              </Providers>
          </body>
        </html>
      </GeneralContextProvider>
  )
}
