import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
        <nav className={styles.nav}>
          <ul>
            <Link href="/"><a><li>Home</li></a></Link>
            <Link href="/About"><a><li>About</li></a></Link>
            <Link href="/blog"><a><li>Blogs</li></a></Link>
            <Link href="/contact"><a><li>Contact Us </li></a></Link>
          </ul>
        </nav>
        <hr />
    </div>
  )
}

export default navbar
