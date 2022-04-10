import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sample App</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="robots" content="noindex" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
