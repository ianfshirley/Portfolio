import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import ContactLinks from './components/ContactLinks'



export const metadata = {
  title: 'Ian F. Shirley: Full-Stack Developer',
  description: 'Developer Portfolio for Ian F. Shirley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body className='w-screen bg-[#191919] absolute'>
        <Header />
        {children}
        <ContactLinks />
        <Footer />
      </body>
    </html>
  )
}
