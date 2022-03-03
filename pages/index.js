import Head from 'next/head'
import Sidebar from '../components/Sidebar/Sidebar'
import Landing from '../components/Landing/Landing'

export default function Home({results}) {
  const usersNew = results.map(item => { 
    return {
      id : item.id ,
      name : item.name ,
      email : item.email ,
      street : item.address.street ,
      city : item.address.city
    }
  })

  return (
    <div>
      <Head>
        <title>Adress Holding</title>
        <meta name="description" content="dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row'>
         <Sidebar/>
         <Landing results={usersNew}/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){

  const request = await fetch(`https://jsonplaceholder.typicode.com/users`
  ).then(res => res.json());


  return{
    props : {
      results : request
    }
  }
}