import NextLink from "next/link"
import Image from "next/image"
import {Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import Global from "@emotion/react"

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
        source = "https://api.genshin.dev/characters/"+ name +"/icon.jpeg";
    } else {
        source = "https://api.genshin.dev/characters/"+ name +"/icon-big.jpeg";
    }

    return(
        <Box w="100%" align="center">
            <LinkBox as={NextLink}
            href={`/characters/${name}`}
            scroll={false} 
            cursor="pointer"
            >
                <Image src={source} 
                alt={name}
                className="character-grid-icon"
                width={100}
                height={100}
                />
                <LinkOverlay href={`characters/${name}`}>
                    <Text>
                        {name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}