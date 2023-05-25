import NextLink from "next/link"
import Image from "next/image"
import {Box, Text, LinkBox, LinkOverlay, Container } from "@chakra-ui/react"
import Global from "@emotion/react"
import { useState, useEffect } from "react"

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

export function GridItem({name, icon, href}) {
    return (
        <Box width={40} align="center" height={40} spacing='40px'>
            <LinkBox cursor={"pointer"}>
                <Image src={icon}
                alt={name}
                className="grid-item-icon"
                loading="lazy"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text>{name}</Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}

export function CharGridItem({name}) {
    let source = "";
    if(name.includes("traveler")) {
        source = "https://api.genshin.dev/characters/"+ name +"/icon";
    } else {
        source = "https://api.genshin.dev/characters/"+ name +"/icon-big";
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.genshin.dev/characters/${name}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
    }, [data])

    return(
        <Box w="auto" align="center" bg={'red.400'} p={2} aspectRatio={1}>
            <LinkBox as={NextLink}
            href={`/characters/${name}`}
            scroll={false} 
            cursor="pointer"
            >
                <Box width={"100%"} overflow={"hidden"} aspectRatio={1} bg={"green"}>
                    <Image src={source} 
                    className="character-grid-icon"
                    width={250}
                    height={250}
                    alt={`${data.name} icon`}
                    
                    priority={true}
                    />
                </Box>
                <LinkOverlay as={"div"} href={`characters/${name}`}>
                    <Text size={8}>
                        {data.name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}