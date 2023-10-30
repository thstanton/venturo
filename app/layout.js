import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Providers from '@/components/Providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div >
          <NavBar/> 
          {children}
          </div>
        </Providers>  
      </body>
    </html>
  )
}

require('dotenv').config();