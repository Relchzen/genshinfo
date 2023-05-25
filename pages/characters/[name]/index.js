import { Text, Box, Container, Flex, Heading } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { name } = context.query;
  const res = await fetch(`https://api.genshin.dev/characters/${name}`);
  const character = await res.json();

  return { props: { character } };
}

export default function Page({ character }) {
  const router = useRouter();
  const src = `https://api.genshin.dev/characters/${router.query.name}/card`
  const srcString = String(src)

  return (
      <Container maxW="container.lg" minW="container.sm">
    <Flex flexDirection="row" mt={10}>
          <Box mr={5} width={"30%"}>
            <Image
            borderRadius={18}
              src={srcString}
              alt="character card"
            />
          </Box>
        <Flex alignItems="flex-start"> {/* Align items to flex-start */}
          <Box bg={'red'}>
            <Heading as={"h1"} size={"2xl"} ml={5} mt={0}> {/* Add mt={0} to remove default margin */}
              {character.name}
            </Heading>
            <Text fontSize={'md'} mb={5} ml={8} mt={0}>
                {character.title}
            </Text>
            {/* Place your text content here */}
          </Box>
        </Flex>
    </Flex>
      </Container>
  );
}
