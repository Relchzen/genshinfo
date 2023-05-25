import NextLink from "next/link"
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay, Container, Icon } from "@chakra-ui/react"
import Global from "@emotion/react"
import { useState, useEffect } from "react"
import styles from '../../styles/bgkeren.module.css'

export function GridStyle() {
    <Global
        styles={`
        .character-grid-icon {
            border-radius: 8px;
        }
        `}
    >
    </Global>
}

export function GridItems({ name, type }) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const source = "https://api.genshin.dev/" + type + "/" + name + "/icon"

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.genshin.dev/${type}/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])
    return (
        <Box w="auto" align="center" bg={'red.400'} p={2} aspectRatio={1}>
            <LinkBox cursor={"pointer"} href={`/${type}/${name}`} scroll={false}>
                <Box width={"100%"} overflow={"hidden"} aspectRatio={1} bg={"green"}>
                    <Image src={source}
                        className="character-grid-icon"
                        width={150}
                        height={150}
                        alt={`${data.name} icon not found :(`}
                        priority={true}
                    />
                </Box>
                <LinkOverlay as={"div"} href={`/${type}/${name}`} target="_blank">

                    <Text>{data.name}</Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}

export function CharGridItem({ name }) {
    let source = "";
    if (name.includes("traveler")) {
        source = "https://api.genshin.dev/characters/" + name + "/icon";
    } else {
        source = "https://api.genshin.dev/characters/" + name + "/icon-big";
    }

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.genshin.dev/characters/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])

    const string = String(data.vision);
    const element = string.toLowerCase();
    const icon = "https://api.genshin.dev/elements/" + element + "/icon";

    return (
        <Box w="auto" align="center" bgGradient='linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)' borderRadius='2xl' p={2} aspectRatio={1} element={data.vision} rarity={data.rarity} weapon={data.weapon}>
            <LinkBox as={NextLink}
                href={`/characters/${name}`}
                scroll={false}
                cursor="pointer"
            >
                <Box className={styles.card} width={"100%"} overflow={"hidden"} aspectRatio={1} bgGradient='linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)' borderRadius='2xl'>
                    <Image src={source}
                        className="character-grid-icon"
                        width={150}
                        height={150}
                        alt={`${data.name} icon`}
                        priority={true}
                    />

                    <div className={`${styles.containerstars} ${styles.cardStars}`}>
                        <div className={styles.star}></div>
                    </div>
                </Box>

                <Image src={icon}
                    className="element-grid-icon"
                    width={30}
                    height={30}
                    alt={`${data.vision} icon`}
                    priority={true}
                />
                <LinkOverlay as={"div"} href={`characters/${name}`}>
                    <Text size={8}>
                        {data.name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}