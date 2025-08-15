'use client'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.name}>
          Johnny Pillacela
        </Link>
        <h1 className={styles.title}>
            Software Engineer
        </h1>
      </div>
    </header>
  )
}