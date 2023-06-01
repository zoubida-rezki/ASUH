import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar} from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar />
      <Sidebar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
