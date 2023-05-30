import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { GridItems } from "../components/grid-item"
import { useState, useEffect } from "react"

function renderWeapons(weapons) {
    return (
        <GridItems name={weapons} type={"weapons"} />
    )
}

export default function Weapons() {
    const [weapons, setWeapon] = useState([]);

    const fetchWeapons = () => {
        fetch("https://api.genshin.dev/weapons")
        .then((response) => response.json())
        .then((data) => setWeapon(data));
    }

    useEffect(() => {
        fetchWeapons();
    }, []);
    
    return (
        <Container minW={"container.sm"} maxW={"container.lg"} p={10}>
            <Section delay={0.8}>
            <Heading>
                Weapons
            </Heading>

            <SimpleGrid columns={[3, null, 4, 6]} spacing={"10px"} mt={5}>
                {weapons.map(renderWeapons)}
            </SimpleGrid>
            </Section>
        </Container>
    )
}