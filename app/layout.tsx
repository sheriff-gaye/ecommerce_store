import { Urbanist } from 'next/font/google'



import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

  console.log(process.env.NEXT_PUBLIC_API_URL)

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}