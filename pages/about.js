import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/footer'
import { Links } from '../components/links'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         About Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Links />
      </main>

      <Footer />
    </div>
  )
}
