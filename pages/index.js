import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Container, background} from "@chakra-ui/react"
import Navbar from './components/navbar'
import Parallax from './components/parallax'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Genshinfo</title>
        <meta name="description" content="Everything about Genshin Impact" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Parallax></Parallax>
      <Container className={styles.main}>
        <Navbar></Navbar>
        <Box backgroundColor="red" width={250} height={50} borderRadius={8} textAlign={"center"} pt={3}>Hello</Box>
      </Container>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
