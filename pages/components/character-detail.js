import { Box, Flex, Container, Text, Image, Heading, Grid, GridItem } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons";
import { Character } from "./character";

export function RarityStar({rarity}) {

    const fiveStar = () => {
        return (<Flex>
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
        </Flex>
        )
    }
    
    const fourStar = () => {
        return (<Flex>
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
            <StarIcon color={'gold'} />
        </Flex>
        )
    }

    return(
        <Flex pl={5} mb={2}>
            {rarity === 5 ? fiveStar() : fourStar()}
        </Flex>
    )
}

export function WeaponType({weapon}) {
    var sourceImg = new String();
    switch(weapon) {
        case 'Claymore':
            sourceImg = "https://api.genshin.dev/weapons/waster-greatsword/icon"
            break;
        case 'Sword':
            sourceImg = "https://api.genshin.dev/weapons/dull-blade/icon"
            break;
        case 'Polearm':
            sourceImg = "https://api.genshin.dev/weapons/beginner-s-protector/icon"
            break;
        case 'Bow':
            sourceImg = "https://api.genshin.dev/weapons/ebony-bow/icon"
            break;
        case 'Catalyst':
            sourceImg = "https://api.genshin.dev/weapons/apprentice-s-notes/icon"
            break;
    }

    return (
        <Box p={3}>
            <Image src={sourceImg} alt={weapon} width={'80px'} height={'80px'} />
        </Box>
    )
}

export function CharacterDescription({descriptions}) {
    return(
        <Box borderRadius={15} pl={5} pt={3} pr={5} pb={3} mb={3}>
                <Text>{descriptions}</Text>
        </Box>
    )
}

export function CharacterRole({name}) {
    const char = Character.find((character) => character.name === name);
    return(
        <Box borderRadius={15}
        border={'2px'}
        px={5} 
        py={3} 
        mb={3} 
        align={'center'} 
        width={'30%'}>
                <Heading fontSize={'xl'}>{char.role}</Heading>
        </Box>
    )
}

export function PriorityStats({name}) {
    const char = Character.find((character) => character.name === name);

    return (
        <Box></Box>
    )
}

export function CharacterAttack({skill, character}) {
    var source = new String();
    switch(skill.type) {
        case "NORMAL_ATTACK":
        source = `https://api.genshin.dev/characters/${character}/talent-na/`;
        break;
        case "ELEMENTAL_BURST":
            source = `https://api.genshin.dev/characters/${character}/talent-burst`;
            break;
        case "ELEMENTAL_SKILL":
            source = `https://api.genshin.dev/characters/${character}/talent-skill`;
            break;
    }

    return (
        <Flex align={'flex-start'} px={5} py={3} key={skill.name}>
            <Box alignSelf={'center'}>
                <Image src={source} alt={skill.type} boxSize={'80px'} objectFit={'cover'} borderRadius={'full'} />
            </Box>
            <Box width={'80%'} ml={5}>
                <Heading as={'h4'} size={'md'}>{skill.name}</Heading>
                <Text fontSize={'md'} color={'yellow.600'}>
                    {skill.unlock}
                </Text>
                <Text fontSize={'sm'}>
                    {skill.description}
                </Text>
            </Box>
        </Flex>
    )
}

export function CharacterItem({name}) {
    const char = Character.find((character) => character.name === name);

    return(
        <Flex flexDirection={{base: 'column' , md: 'row'}}>
            <Flex flexDirection={'column'} minW={'48%'} maxW={'100%'}>
            <Heading fontSize={'2xl'} mx={5} my={2}>Best Weapon</Heading>
                {char.bestWeapon.map(function(weapon, index, []) {
                    return(
                        <Flex p={'1'} m={1} align={'center'} key={index} border={'2px'} borderRadius={15}>
                            <Box 
                            width={'40px'} 
                            height={'40px'} 
                            m={2} 
                            align={'center'} 
                            p={1}
                            borderRadius={13}>
                                <Heading as={'h1'} fontSize={'2xl'}>{index +1}</Heading>
                            </Box>
                            <Flex align={'center'}>
                                <Box m={2} width={'50px'} height={'50px'} minW={'50px'}>
                                    <Image alt='artifact icon' src={weapon.source} />
                                </Box>
                                <Text ml={2} as={'b'}>
                                    {weapon.name}
                                </Text>
                            </Flex>
                        </Flex>
                    )
                })}
            </Flex>
            <Flex minW={'52%'} maxW={'100%'} flexDirection={'column'}>
            <Heading fontSize={'2xl'} mx={5} my={2}>Best Artifacts</Heading>
            {char.bestArtifact.map(function(artifact, index, []) {
                    return(
                        <Flex p={1} m={1}  align={'center'} key={index} border={'2px'} borderRadius={15}>
                            <Box 
                            width={'40px'} 
                            height={'40px'} 
                            m={2} 
                            align={'center'} 
                            p={1}
                            borderRadius={13}>
                                <Heading as={'h1'} fontSize={'2xl'}>{index +1}</Heading>
                            </Box>
                            {artifact.map(function(artifact, index, []) {
                                return(
                                    <Flex
                                    flexDirection={{base: 'column' , md: 'row'}} 
                                    align={'center'} 
                                    minW={'35%'} 
                                    key={index}>
                                        <Box 
                                        m={2} 
                                        width={'50px'} 
                                        height={'50px'} 
                                        minW={'50px'}>
                                            <Image alt='artifact icon' src={artifact.source} />
                                            <Box position={'relative'} 
                                            align={'center'} 
                                            justifyContent={'center'} 
                                            width={'20px'} 
                                            bottom={"6"} 
                                            left={'10'} 
                                            aspectRatio={1} 
                                            borderRadius={5}
                                            bg={'purple.800'}
                                            color={'whiteAlpha.800'}
                                            >{artifact.stack}</Box>
                                        </Box>
                                        <Text align={'center'} as={'b'} justifyContent={'center'} ml={2}>
                                            {artifact.name}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}