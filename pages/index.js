import styles from '../styles/Home.module.css'
import {Container} from "@chakra-ui/react"

export default function Home() {
  return (


    <Container className={styles.Container} minW="container.md" w={'full'}>
            <img className={styles.liyue} src="https://e1.pxfuel.com/desktop-wallpaper/986/834/desktop-wallpaper-j-genshin-impact-liyue.jpg"></img>
            <div className={styles.backgroundBox}></div>
      </Container>
  )
}
