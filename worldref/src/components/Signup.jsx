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
import { json } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
    console.log(email,password)
  const handleSignup = () => {
    let localdata = JSON.parse(localStorage.getItem('data')) || []
    const data = {email:email,password:password}
    localdata = [...localdata ,data]
    localStorage.setItem("data",JSON.stringify(localdata))
    toast({
      title: 'Sign Up',
      description: `Signing up with email: ${email} and password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    window.location.href = "/login"
  };

  const handleLogin = () => {
    // Your login logic goes here
    // For demonstration, just show a toast message
    window.location.href = "/login"
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

