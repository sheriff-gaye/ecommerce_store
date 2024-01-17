import { Urbanist } from 'next/font/google'
require('dotenv').config()



import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'






const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <ModalProvider/>
        <ToastProvider/>
        {children}
        <Footer />
      </body>
    </html>
  )
}