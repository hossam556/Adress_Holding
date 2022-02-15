import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar/Sidebar'
import Landing from '../components/Landing/Landing'

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Adress Holding</title>
        <meta name="description" content="dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row'>
         <Sidebar/>
         <Landing results={results}/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  // const genre = context.query.genre;
  // console.log(genre);

  const request = await fetch(`https://jsonplaceholder.typicode.com/users`
  ).then(res => res.json());


  return{
    props : {
      results : request
    }
  }
}