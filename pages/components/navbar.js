import Logo from "./logo";
import NextLink from "next/link";
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function LinkItem({href, path, children}) {
    const active = path === href;
    return(
    <NextLink href={href}>
        <Link p={2}
        bg={active ? '#DF7861':undefined} 
        color={active? '#3E7DA6' : '#F7F5E8'}
        >
            {children}</Link>
    </NextLink>
    )
}


export default function Navbar(props) {
    const { path } = props;
    return(
        <Box position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        {...props}
        >
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack direction={{base: 'column', md: 'row' }}
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/characters" path={path}>Characters</LinkItem>
                    <LinkItem href="/news" path={path}>News</LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/characters" passHref>
                                    <MenuItem as={Link}>Characters</MenuItem>
                                </NextLink>
                                <NextLink href="/news" passHref>
                                    <MenuItem as={Link}>News</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}