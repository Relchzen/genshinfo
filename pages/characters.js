import { useState, useEffect } from "react";
import { Container, Box, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "./components/section"
import { CharGridItem } from "./components/grid-item";
import {motion} from "framer-motion"

function renderCharacter(char) {
    return (
        // <Section delay={0.1}>
            <CharGridItem name={char} key={char} />
        // </Section>
    )
}

export default function Characters() {
    const [characters, setCharacter] = useState([]);

    const fetchCharacters = () => {
        fetch("https://api.genshin.dev/characters")
        .then((response) => response.json())
        .then((data) =>setCharacter(data));
    }

    useEffect(() => {
        fetchCharacters();
    }, [characters]);
    
    return (
        <Container minW={"container.md"} maxW={"container.lg"} p={10}>
            <Section delay={1}>

            <Heading>
                Characters
            </Heading>
            <SimpleGrid columns={[3, null, 4, 6]} spacing={"10px"} mt={5}>
                {characters.map(renderCharacter)}
            </SimpleGrid>
            </Section>
        </Container>
    )
}