import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from './home/index'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Stratus</title>
        <meta name="description" content="Stratus, une identité visuelle à votre image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
    </div>
  )
}

export default Home
