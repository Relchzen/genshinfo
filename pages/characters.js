import { useState, useEffect } from "react";
import { Container, Box, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "./components/section"
import { CharGridItem } from "./components/grid-item";

function renderCharacter(char) {
    return (
        <CharGridItem name={char} />
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
    }, []);

    console.log(characters);

    return (
        <Container minW={"container.md"} maxW={"container.xl"}>
            <Heading>
                Characters
            </Heading>

            <SimpleGrid columns={[4, null, 6, 8]} spacing={"5px"} mt={10}>
                {characters.map(renderCharacter)}
            </SimpleGrid>
        </Container>
    )
}