import React, { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Navbar from './Navbar';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSignup = () => {
    // Your signup logic goes here
    // For demonstration, just show a toast message
    toast({
      title: 'Sign Up',
      description: `Signing up with email: ${email} and password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogin = () => {
    // Your login logic goes here
    // For demonstration, just show a toast message
    toast({
      title: 'Login',
      description: `Logging in with email: ${email} and password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
    <Navbar />
    <Container maxW="lg" centerContent>
      <Stack spacing={8} p={8} boxShadow="lg" rounded="md" bg="white" mt={8}>
        <Heading as="h2" size="xl">
          Welcome
        </Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button>
        <Text textAlign="center">or</Text>
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Container>
    </>
  );
};

