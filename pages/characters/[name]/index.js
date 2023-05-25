import { Text, Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { name } = context.query;
  const res = await fetch(`https://api.genshin.dev/characters/${name}`);
  const character = await res.json();

  return { props: { character } };
}

export default function Page({ character }) {
  const router = useRouter();

  return (
    <Flex flexDirection="row" mt={10}>
      <Container maxW="container.xl" minW="container.md">
        <Flex alignItems="flex-start"> {/* Align items to flex-start */}
          <Box bg="red" borderRadius={10} mr={5} p={5}>
            <Image
              src={`https://api.genshin.dev/characters/${router.query.name}/card`}
              alt="character card"
              width={300}
              height={1000}
              priority={true}
            />
          </Box>
          <Box>
            <Text fontSize={30} mb={5} ml={10} mt={0}> {/* Add mt={0} to remove default margin */}
              {character.name}
            </Text>
            {/* Place your text content here */}
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
