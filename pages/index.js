import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/codinglogo.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding for beginers</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>

        <Image alt='coding image' className={styles.img} src={profilePic}/>
        <h1 className={styles.title}>
          Coding for beginers
        </h1>

        <p className={styles.description}>
          A site for beginers.
        </p>
        <h2>Top Blogs</h2>
        <div className={styles.blogs}><div className={styles.blogsdiv}><h3>Lorem, ipsum dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla porro assumenda.</p></div>
        <div className={styles.blogsdiv}><h3>Lorem, ipsum dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla porro assumenda.</p></div>
        <div className={styles.blogsdiv}><h3>Lorem, ipsum dolor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla porro assumenda.</p></div></div>
      </main>

     
    </div>
  )
}
