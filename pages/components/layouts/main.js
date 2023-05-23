import Head from "next/head"
import {Box, Container} from "@chakra-ui/react"
import Navbar from "../navbar"
import { motion } from "framer-motion"

export default function Main({children, router }) {
    return (
        <Box as="main" pb={8} width="100%">
            <Head>
                <title>Genshinfo</title>
                <meta name="description" content="Everything about Genshin Impact" />
                <meta name="viewport" content="width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar path={router.asPath} />

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5}}>

            <Box pt={14} minW={"container.md"}>
                {children}
            </Box>
            </motion.div>
        </Box>
    )
}