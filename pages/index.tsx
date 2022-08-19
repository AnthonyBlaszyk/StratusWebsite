import type { NextPage } from 'next'
import Head from 'next/head'
import IndexNav from '../components/index/indexNav'
import VideoBackground from '../components/VideoBackround'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Stratus</title>
        <meta name="description" content="Stratus, une identité visuelle à votre image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <VideoBackground/>
        <h1>Soon...</h1>
        <IndexNav/>
      </div>
    </div>
  )
}

export default Home
