import '@/styles/globals.css'
import { GetServerSideProps } from 'next';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  if (getRandomInt(10) === 5) {
    throw new Error('Internal Server Error');
  }

  return {
    props: {
    },
  }
}