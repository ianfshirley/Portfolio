import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Image from 'next/image'


export const metadata = {
  title: 'Ian F. Shirley: Full-Stack Developer',
  description: 'Developer Portfolio for Ian F. Shirley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='absolute overflow-hidden w-screen min-h-screen'>
        <Image 
          src='/img/textured.jpg'
          alt='textured black background'
          fill={true}
          className='object-cover'
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
