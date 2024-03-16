import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export function Singleproduct({products}) {
    //console.log(el)
    const isAuth = localStorage.getItem('auth') || false
    return (
      <Flex flexWrap="wrap">
      {products.map((item, index) => (
        <Box key={index} width={{ base: '100%', sm: '50%', md: '25%' }} p={4} height="400px" >
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height="100%" display="flex" flexDirection="column">
            <Image src={item.image} alt={item.title} height='190px' />
            <Box p={4} flex="1" display="flex" flexDirection="column" justifyContent="space-between">
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>{item.title}</Text>
                <Text fontSize="md" mb={4} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">{item.description}</Text>
              </Box>
              {
                isAuth &&  <Flex justifyContent="space-between">
                <Button colorScheme="teal">Button 1</Button>
                <Button colorScheme="blue">Button 2</Button>
              </Flex>  
              }
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
    )
}