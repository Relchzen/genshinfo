import { Box, Flex, Container, Stack, Text, Image, Heading } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons";

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
        <Box w={'65px'} height={'65px'} mt={3}>
            <Image src={sourceImg} alt={weapon} />
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
        <Flex align={'flex-start'} pl={5} pt={3} pr={5} pb={3} key={skill.name}>
            <Box alignSelf={'center'}>
                <Image src={source} alt={skill.type} boxSize={'80px'} objectFit={'cover'} borderRadius={'full'} />
            </Box>
            <Box width={'80%'} ml={5}>
                <Heading as={'h4'} size={'md'}>{skill.name}</Heading>
                <Text fontSize={'md'} color={'yellow.300'}>
                    {skill.unlock}
                </Text>
                <Text fontSize={'sm'}>
                    {skill.description}
                </Text>
            </Box>
        </Flex>
    )
}