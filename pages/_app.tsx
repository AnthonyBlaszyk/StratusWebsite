import '../styles/globals.css'
import '../styles/colors.css'
import './components/layout/layout.css'
import './components/subscription/subscription.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
