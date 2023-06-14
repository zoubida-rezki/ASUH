import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar} from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <body>
        <Main />
        <NextScript />
      </body>
      </div>
      <div className='w-4/5 mx-auto'>
      <Footer />
      </div>
    </Html>
  )
}
