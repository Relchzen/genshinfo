import NextLink from "next/link"
// import Image from "next/image";
import { Image, Box, Text, LinkBox, LinkOverlay, Container, Icon } from "@chakra-ui/react"
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
            gradiant = "red";
            break;
        case "anemo":
            gradiant = "grey";
            break;
        case "cryo":
            gradiant = "cyan";
            break;
        case "dendro":
            gradiant = "green";
            break;
        case "geo":
            gradiant = "brown";
            break;
        case "hydro":
            gradiant = "blue";
            break;
        case "electro":
            gradiant = "violet";
            break;
    }

    let charBg = new String();
    if (data.rarity === 4) {
        charBg = 'purple';
    } else if (data.rarity === 5) {
        charBg = 'gold';
    } else {
        charBg = 'white';
    }

    return (
        <Box w="auto" align="center" bg={gradiant} borderRadius='2xl' p={2} aspectRatio={1} element={data.vision} rarity={data.rarity} weapon={data.weapon}>
            <LinkBox as={NextLink}
                href={`/characters/${name}`}
                scroll={false}
                cursor="pointer"
            >
                <Box width={"100%"} overflow={"hidden"} aspectRatio={1} bg={charBg} borderRadius='2xl'>
                    <Image src={source}
                        className="character-grid-icon"
                        width={'full'}
                        objectFit={'cover'}
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