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
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
  import { useNavigate } from 'react-router-dom'
  
  export const SignupCard = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { toggleColorMode } = useColorMode(); 
    const handleLogin = () => {
      navigate("/login")
    }
  
    return (
      <Flex
        minH={'100vh'}
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
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}
                      colorScheme="blue">
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={6} pt={2}>
                <Button
                  loadingText="Submitting"
                  colorScheme={'teal'}
                  variant={'solid'}
                  _hover={{
                    bg: 'teal.600',
                  }}
                  onClick={() => navigate("/login")}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'teal.600'} onClick={handleLogin}>Login</Link>
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
  