import React from 'react';
import { Box, Flex, Spacer, Heading, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = JSON.parse(localStorage.getItem('auth'))

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        
        
      <Link href='/'>Home</Link>
        {
          isAuth == true ? <Link href='/login'>Logout</Link> : <Link href='/login'>Login</Link>
        }
        {/* <Link href='/login'>Login</Link> */}
        <Link href='/signup'>Signup</Link>
        <Flex alignItems='center'>
          <IconButton
            mr={2}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label='Toggle color mode'
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
