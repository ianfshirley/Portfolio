import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContactLinks from './components/Header/ContactLinks'


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
      <body className='w-screen bg-[#191919] '>
        <Header />
        {children}
        <ContactLinks />
        <Footer />
      </body>
    </html>
  )
}
