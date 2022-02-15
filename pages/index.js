import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar/Sidebar'
import Landing from '../components/Landing/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adress Holding</title>
        <meta name="description" content="dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row'>
         <Sidebar/>
         <Landing/>
      </div>
    </div>
  )
}
