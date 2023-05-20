import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "./components/section"
import GridItem from "./components/grid-item"

export default function Characters() {
    return (
        <Container minW={"container.md"} maxW={"container.xl"}>
            <Heading>
                Characters
            </Heading>
            <Section>

            <SimpleGrid columns={[2, null, 3, 4]} spacing={"15px"}>
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