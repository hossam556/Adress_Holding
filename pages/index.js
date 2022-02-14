import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'

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
         <Main/>
      </div>
    </div>
  )
}
