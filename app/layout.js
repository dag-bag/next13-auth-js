import AppProvider from '@/context/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cloud Image',
  description: 'Upload your Images to Cloud for free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <main style={{margin: '50px'}}>
          {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
