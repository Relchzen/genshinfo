import NextLink from 'next/link'
import { Box, Flex, Container, Text, Image, Heading, Wrap, WrapItem, LinkBox, SimpleGrid } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons";
import { Character } from "./character";
import GetCharacter from './getCharacter';

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
        py={1}
        ml={5}
        align={'center'}
        maxW={'150px'} >
            <Heading fontSize={'xl'}>{char.role}</Heading>
        </Box>
    )
}

export function PriorityStats({name}) {
    const char = Character.find((character) => character.name === name);
    var source = new String();
    return (
        <SimpleGrid columns={[1, null, 2]} mt={5} justify={'center'} borderRadius={18} p={2} spacing={'5px'}>
            {char.artifactStat.map(function(stat, index, []) {
                switch (stat.name) {
                    case "flower":
                        source = "https://img.gamewith.net/img/9c846f7a43b86f7315ec519a6fa3b15f.jpg";
                        break;
                    case "plume":
                        source = "https://img.gamewith.net/img/e177d3e6e2771f686f797f2084517c00.jpg"
                        break;
                    case "sand":
                        source = "https://img.gamewith.net/img/0c9778585237a814e713006f6bc48034.jpg"
                        break;
                    case "goblet":
                        source = "https://img.gamewith.net/img/6129f569a5633c82ff7cd307ac1c13fd.jpg"
                        break;
                    case "headgear":
                        source = "https://img.gamewith.net/img/2f83e6e3f58c8f4355a2519444e84db3.jpg"
                        break;
                }
                return(
                    <Flex border={'2px'} borderRadius={18} key={index}>
                        <Box p={2} mr={2}>
                            <Image src={source} borderRadius={'full'} width={'60px'} />
                        </Box>
                        <Box p={2} maxW={'200px'}>
                            <Heading fontSize={'xl'}>Main: {stat.priority}</Heading>
                            <Heading fontSize={'md'}>Sub: {stat.sub}</Heading>
                        </Box>
                    </Flex>
                )
            })}
        </SimpleGrid>
    )
}

export function BestTeam({name}) {
    const char = Character.find((character) => character.name === name);
    return (
        <Flex justify={'center'} flexDirection={{base: 'column', md: 'row'}}>
            {char.bestTeam.map(function(team, index, []) {
            return(
                <Wrap justify={'center'} key={index} border={'2px'} m={2} borderRadius={18}>
                    {team.map(function(teammate, index, []) {
                        return(
                            <WrapItem maxW={'86px'} p={1.5} key={index}>
                                <LinkBox as={NextLink} scroll={false} cursor={'pointer'} href={`/characters/${teammate}`}>
                                    <GetCharacter name={teammate} />
                                </LinkBox>
                            </WrapItem>
                        )
                    })}
                </Wrap>
            )
        })}
        </Flex>
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
                                    <Image alt='artifact icon' src={weapon.source} width={'50px'} height={'50px'} />
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

export function CharacterPassive({character, passive}) {
    var source = new String();
    switch(passive.unlock) {
        case "Unlocked at Ascension 1":
            source = `https://api.genshin.dev/characters/${character}/talent-passive-1`;
            break;
        case "Unlocked at Ascension 4":
            source = `https://api.genshin.dev/characters/${character}/talent-passive-2`;
            break;
        case "Unlocked Automatically":
            source = `https://api.genshin.dev/characters/${character}/talent-passive-0`;
            break;
    }

    return (
        <Flex align={'flex-start'} px={5} py={3} key={passive.name}>
            <Box alignSelf={'center'}>
                <Image src={source} alt={passive.name} boxSize={'80px'} objectFit={'cover'} borderRadius={'full'} />
            </Box>
            <Box width={'80%'} ml={5}>
                <Heading as={'h4'} size={'md'}>{passive.name}</Heading>
                <Text fontSize={'sm'}>
                    {passive.description}
                </Text>
            </Box>
        </Flex>
    )
}

export function CharacterConstellation({character, constellation}) {
    var source = new String();
    switch(constellation.level) {
        case 1:
            source = `https://api.genshin.dev/characters/${character}/constellation-1`;
            break;
        case 2:
            source = `https://api.genshin.dev/characters/${character}/constellation-2`;
            break;
        case 3:
            source = `https://api.genshin.dev/characters/${character}/constellation-3`;
            break;
        case 4:
            source = `https://api.genshin.dev/characters/${character}/constellation-4`;
            break;
        case 5:
            source = `https://api.genshin.dev/characters/${character}/constellation-5`;
            break;
        case 6:
            source = `https://api.genshin.dev/characters/${character}/constellation-6`;
            break;
    }

    return (
        <Flex align={'flex-start'} px={5} py={3} key={constellation.name}>
            <Box alignSelf={'center'}>
                <Image src={source} alt={constellation.name} boxSize={'80px'} objectFit={'cover'} borderRadius={'full'} />
            </Box>
            <Box width={'80%'} ml={5}>
                <Heading as={'h4'} size={'md'}>{constellation.name}</Heading>
                <Text fontSize={'sm'}>
                    {constellation.description}
                </Text>
            </Box>
        </Flex>
    )
}