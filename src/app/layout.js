import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter( { subsets: [ 'latin' ] } )

export const metadata = {
  title: 'Bingo',
  description: 'bingo game developed by younan nwesre',
}

export default function RootLayout ( { children } )
{
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="w-full fixed bottom-3">        <p className="text-center">developed by : <Link href="https://www.linkedin.com/in/younan-nwesre/" className="text-red-500">Younan Nwesre</Link></p>
        </div>
      </body>
    </html>
  )
}
