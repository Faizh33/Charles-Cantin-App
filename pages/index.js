import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Charles Cantin - Photographe</title>
        <meta name="description" content="Galerie des photographies de Charles Cantin. Je m'occupe de tous vos événements: mariage, baptême, portrait, photos de votre enfant/bébé, photos de couples,..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Raleway:ital,wght@0,400;0,500;1,300&display=swap" rel="stylesheet" />
      </Head>
      <>
        <h1 className={styles.Hometext}>Charles Cantin Photographe</h1>
      </>
    </>
  )
}
