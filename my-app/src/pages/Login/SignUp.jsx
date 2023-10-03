import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useColorMode,
  Show,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
const initialData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  cart: [],
}


export const SignupCard = () => {

  const toast = useToast()
  const [data, setData] = useState(initialData)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { toggleColorMode } = useColorMode();
  const oldUser = () => {
    navigate("/login")
  }
  const handleChange = (e) => {
    const { name, value } = e.target

    setData((pre) => {
      return { ...pre, [name]: value }
    })
  }

  const handleSignUp = () => {
    axios.post(`https://shopkart-payload.onrender.com/userdata`, data)
      .then((res) => {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate("/login")
      })
      .catch((err) => { alert("please try again") })
  }

  const { first_name, last_name, email, password } = data

  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.100', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box flex={1}>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name='first_name' value={first_name} onChange={handleChange} />
                </FormControl>
              </Box>
              <Box flex={1}>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name='last_name' value={last_name} onChange={handleChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                    colorScheme="#003d29">
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6} pt={2}>
              <Button
                loadingText="Submitting"
                variant={'solid'}
                style={{
                  backgroundColor: '#003d29',
                  color: 'white',
                  transition: 'background-color 0.2s, opacity 0.2s',
                }}
                _hover={{
                  backgroundColor: 'rgb(0,61,41)',
                  opacity: 0.6,
                }}
                onClick={handleSignUp}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'teal.600'} onClick={oldUser}>Login</Link>
              </Text>
            </Stack>
            <Box textAlign="center">
              <Link
                color={'teal.600'}
                onClick={toggleColorMode}
                _hover={{
                  textDecoration: 'underline',
                }}>
                Toggle {useColorModeValue('Dark', 'Light')} Mode
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>





    </Flex>
  )
}
