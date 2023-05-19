import styles from '../styles/Home.module.css'
import {Container} from "@chakra-ui/react"
import Parallax from './components/parallax'

export default function Home() {
  return (
      <Container minW="container.md" w={'full'}>
      <Parallax />
      </Container>
  )
}
