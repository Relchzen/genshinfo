import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./components/layouts/main"
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
  <ChakraProvider>
    <Layout router={router}>
      <AnimatePresence initial={true} mode={"wait"} key={router.pathname}>
          <Component {...pageProps} />
      </AnimatePresence>
    </Layout>

  </ChakraProvider>)
}

export default MyApp
