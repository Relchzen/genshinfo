import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, Container} from "@chakra-ui/react"
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Container className={styles.main}>
      </Container>
    </div>
  )
}
