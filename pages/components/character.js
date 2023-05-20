import { Box, Flex, Container, Center, Input, flexbox } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AiOutlineSearch } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

export default function TierList() {
    const [inputValue, setInputValue] = useState('');
    const [randomValues, setRandomValues] = useState([]);

    // Membuat fungsi untuk memfilter tier berdasarkan input
    const filterTier = (index, letter) => {
        // Jika input kosong, tampilkan semua tier
        if (inputValue === '') {
            return true;
        }
        // Jika tier cocok dengan input, tampilkan tier tersebut
        if (randomValues[index].toLowerCase().includes(inputValue.toLowerCase()) || letter.toLowerCase().includes(inputValue.toLowerCase())) {
            return true;
        }
        return false;
    };

    // Menghasilkan array berisi huruf dari A hingga Z
    const alphabetArray = Array.from({ length: 26 }, (_, index) =>
        String.fromCharCode(65 + index)
    );

    // Function to get a random value from the array
    const getRandomValue = () => {
        const values = ["angin", "petir", "api", "air"];
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    };

    // Generate random values for each letter when component mounts
    useEffect(() => {
        const generatedValues = alphabetArray.map(() => getRandomValue());
        setRandomValues(generatedValues);
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Handle button click
    const handleButtonClick = (value) => {
        setInputValue(value);
    };

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            backgroundColor="#FFFDEF"
            mt={5}
            mb={5}
            width="100%"
            height="auto"
            textAlign="center"
            borderRadius={20}
            p={10}
            gap={10}
        >
            <Box mt={3} fontSize={40}>
                Character
            </Box>
            <Center>
                <Input
                    backgroundColor="#EFEBE2"
                    placeholder="Character"
                    width="100%"
                    display="flex"
                    borderRadius={50}
                    value={inputValue}
                    onChange={handleInputChange}
                >
                </Input>
            </Center>
            <ButtonGroup mt={3}>
                <Button onClick={() => handleButtonClick("Angin")}>Angin</Button>
                <Button onClick={() => handleButtonClick("Api")}>Api</Button>
                <Button onClick={() => handleButtonClick("Petir")}>Petir</Button>
                <Button onClick={() => handleButtonClick("Air")}>Air</Button>
            </ButtonGroup>
            <Flex direction="row" align="center" justify="center" gap={10} flexWrap="wrap">
                {alphabetArray.map((letter, index) => (
                    <Box
                        key={letter}
                        display={filterTier(index, letter) ? "flex" : "none"}
                        backgroundColor="#DF7861"
                        width={150}
                        height={120}
                        borderRadius={20}
                        style={{ display: filterTier(index, letter) ? 'block' : 'none' }}
                        _hover={{
                            width: "170px",
                            height: "150px",
                        }}
                    >
                        {letter}
                        -
                        {randomValues[index]}
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}
