'use client'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter( { subsets: [ 'latin' ] } )


export default function RootLayout ( { children } )
{
  const [ darkMode, setDarkMode ] = useState( false );
  useEffect( () =>
  {
    if ( darkMode )
    {
      document.body.classList.add( 'dark' );
    } else
    {
      document.body.classList.remove( 'dark' );
    }
  }, [ darkMode ] );
  const toggleDarkMode = () =>
  {
    setDarkMode( !darkMode );
  };
  return (
    <html lang="en">
      <body className={inter.className + ' dark:bg-white'}>
        {children}
        <div className="w-full fixed bottom-3 ">        <p className="text-center">developed by : <Link href="https://www.linkedin.com/in/younan-nwesre/" className="text-red-500">Younan Nwesre</Link></p>
        </div>
      </body>
    </html>
  )
}
