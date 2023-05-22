import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "./components/section"
import GridItem from "./components/grid-item"

export default function Weapons() {
    return (
        <Container minW={"container.md"} maxW={"container.xl"}>
            <Heading>
                Weapons
            </Heading>
            <Section>

            <SimpleGrid columns={[2, null, 3, 4]} spacing={"15px"} mt={10}>
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
               <GridItem /> 
            </SimpleGrid>
            </Section>
        </Container>
    )
}