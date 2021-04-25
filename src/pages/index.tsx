// SPA
// useEffect(() => {
//   fetch('http://localhost:3333/episodes')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }, []);

// SSR
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

// SSG

import { useEffect } from "react"


export default function Home(props) {
  return (
    <div>
      <h1>INDEX</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    //tempo em segundos para revalidar ou refazer a chamada
    revalidate: 60 * 60 * 8,
  }
}
