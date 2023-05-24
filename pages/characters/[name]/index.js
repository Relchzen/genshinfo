import { Text, Box, Container } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"


export async function getServerSideProps(context) {
    const { name } = context.query;
    const res = await fetch(`https://api.genshin.dev/characters/${name}`);
    const character = await res.json();
   
    return { props: { character } };
}

export default function Page({ character }) {
    const router = useRouter();

    return (
        <Container maxW={'container.xl'} minW={'container.md'} bg="blue" align={"center"}>
            <Box width={"90%"} bg="red" borderRadius={10}>
                <Text>{character.name}</Text>
                <Image src={`https://api.genshin.dev/characters/${router.query.name}/card`} 
                alt="character card" 
                width={300} 
                height={1000} 
                priority={true} />
            </Box>
        </Container>
    )
}
