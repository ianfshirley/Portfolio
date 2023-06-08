import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export const metadata = {
  title: 'Ian F. Shirley: Full-Stack Developer',
  description: 'Developer Portfolio for Ian F. Shirley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
