import { React , useState } from "react";
import { Navigate, useHistory, useNavigation } from 'react-router-dom';
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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import Navbar from "./Navbar";
import { Singleproduct } from "./Singleproduct";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const [auth , setAuth] = useState(false)
  const data = JSON.parse(localStorage.getItem('data')) 
  console.log(data,'data')
  // const handleSignup = () => {
  //   // Your signup logic goes here
  //   // For demonstration, just show a toast message

  //   toast({
  //     title: 'Sign Up',
  //     description: `Signing up with email: ${email} and password: ${password}`,
  //     status: 'success',
  //     duration: 5000,
  //     isClosable: true,
  //   });
  // };

  const handleLogin = () => {
    
    if(data && data.email === email && data && data.password === password) {
      toast({
        title: 'Login',
        description: `Logging in with email: ${email} and password: ${password}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setAuth(true)
      window.location.href = "/"
      
      localStorage.setItem('auth' , JSON.stringify(auth))
    }else {
      toast({
        title: 'Login',
        description: `Invalid creds`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
    
    
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
        {/* <Button colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button> */}
        {/* <Text textAlign="center">or</Text> */}
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Container>
    
    </>
  );
};

export default Login;