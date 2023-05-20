import styles from '../styles/Home.module.css'
import {Box, Container} from "@chakra-ui/react"

export default function Home() {
  return (
    <Box className={styles.container} minW="container.md" width="100%">
            <img className={styles.liyue} src="https://e1.pxfuel.com/desktop-wallpaper/986/834/desktop-wallpaper-j-genshin-impact-liyue.jpg"></img>
            <div className={styles.backgroundBox}></div>
      </Box>
  )
}