import NextLink from "next/link"
// import Image from "next/image";
import { Image, Box, Text, LinkBox, LinkOverlay, Container, Icon } from "@chakra-ui/react"
import Global from "@emotion/react"
import { useState, useEffect } from "react"
import styles from '../../styles/bgkeren.module.css'
import GetCharacter from "./getCharacter"

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

export function GridArtifacts({name}) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);


    let source = "https://api.genshin.dev/artifacts/" + name + "/flower-of-life"
    if(name.includes("prayers")) {
        if(name.includes("prayers-to-the-firmament")) {
            source = "https://api.genshin.dev/artifacts/" + name + "/flower-of-life"
        } else {
            source = "https://api.genshin.dev/artifacts/" + name + "/circlet-of-logos"
        }
    } 

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.genshin.dev/artifacts/${name}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
    }, [])

    return (
        <Box w="auto" align="center" bg={'red.400'} p={1} aspectRatio={1}>
            <LinkBox cursor={"pointer"} href={`/artifacts/${name}`} scroll={false}>
                <Box overflow={"hidden"} aspectRatio={1} bg={"green"} alignItems={"center"} justifyContent={"center"} >
                    <Image src={source} 
                    className="character-grid-icon"
                    width={200}
                    height={200}
                    alt={`${data.name} icon not found :(`}
                    priority={true}
                    />
                </Box>
                <LinkOverlay as={"div"} href={`/artifacts/${name}`} target="_blank">
                    
                    <Text>{data.name}</Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}

export function GridItems({name, type}) {
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
    let gradiant = new String();

    switch (element) {
        case "pyro":
            gradiant = "linear(#820000, #B9005B, #FF7C7C, #B9005B)";
            break;
        case "anemo":
            gradiant = "linear(#99A799, #ADC2A9, #D3E4CD, #99A799)";
            break;
        case "cryo":
            gradiant = "linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)";
            break;
        case "dendro":
            gradiant = "linear(#425F57, #749F82, #A8E890, #749F82)";
            break;
        case "geo":
            gradiant = "linear(#8E3200, #A64B2A, #D7A86E, #A64B2A)";
            break;
        case "hydro":
            gradiant = "linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)";
            break;
        case "electro":
            gradiant = "linear(#1C0C5B, #3D2C8D, #916BBF, #C996CC)";
            break;
    }

    let charBg = new String();
    if (data.rarity === 4) {
        charBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
    } else if (data.rarity === 5) {
        charBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else {
        charBg = 'white';
    }

    return (
        <Box w="auto" align="center" bgGradient={charBg} borderRadius='2xl' p={2} aspectRatio={1} element={data.vision} rarity={data.rarity} weapon={data.weapon}>
            <LinkBox as={NextLink}
                href={`/characters/${name}`}
                scroll={false}
                cursor="pointer"
            >
                <GetCharacter name={name} />
                    <div className={`${styles.containerstars} ${styles.cardStars}`}>
                        <div className={styles.star}></div>
                    </div>

                <Image src={icon}
                    className="element-grid-icon"
                    width={30}
                    height={30}
                    alt={`${data.vision} icon`}
                    priority={true}
                />
                <LinkOverlay as={"div"} href={`characters/${name}`}>
                    <Text fontSize={16}>
                        {data.name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}