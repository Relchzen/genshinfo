import Head from "next/head"
import {Box, Container} from "@chakra-ui/react"
import Navbar from "../navbar"

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

            <Box pt={14} minW={"container.sm"}>
                {children}
            </Box>
        </Box>
    )
}