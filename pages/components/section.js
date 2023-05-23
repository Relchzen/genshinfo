import { motion } from "framer-motion"
import {chakra, shouldForwardProp} from "@chakra-ui/react"

const styledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

export default function Section({children, delay = 0}) {
    return (
        <styledDiv
        initial={{y:10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 5, delay}}
        mb={6}
        >{children}
        </styledDiv>
    )
}