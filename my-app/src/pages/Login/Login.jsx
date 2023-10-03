
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  Box,
  useColorModeValue,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './LoginAction';
import axios from 'axios';

let initialdata = {
  email: "",
  password: ""
}

export const Login = () => {
  const toast = useToast()
  let [alluserdata, setalluserdata] = useState([])
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => {
    return store.loginReducer.isAuth
  })
  const [userLoginData, setLoginData] = useState(initialdata)


  useEffect(() => {
    axios.get(`https://shopkart-payload.onrender.com/userdata`)
      .then((res) => { setalluserdata(res.data) })
      .catch((err) => { console.log(err) })
  }, [])


  const handleChange = (e) => {
    const { value, name } = e.target
    setLoginData((pre) => {
      return { ...pre, [name]: value }
    })
  }



  const handleLogin = (e) => {
    e.preventDefault();
    let flag = false
    alluserdata.forEach((e) => {
      if (userLoginData.email == e.email && userLoginData.password == e.password) {
        dispatch(loginAction(e));
        flag = true
        localStorage.setItem("user", JSON.stringify(e.id))
        return
      }
    })
    if (flag == false) {
      toast({
        title: 'incorrect details',
        description: "Please type correct password and email",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

  }

  if (isAuth) {
    navigate("/")
  }


  return (

    <Stack
      minH={'81vh'}
      direction={{ base: 'column', md: 'row' }}
      spacing={0}>

      <Flex p={8} flex={1} align={'center'} justify={'center'}
        bg={useColorModeValue('gray.100', 'gray.800')}
      >
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          w={'full'} maxW={'md'}>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'} textAlign="center">
              Sign in to your account
            </Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="example@gmail.com"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                _placeholder={{
                  color: useColorModeValue('gray.500', 'gray.400'),
                }}
                name='email'
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                _placeholder={{
                  color: useColorModeValue('gray.500', 'gray.400'),
                }}
                name='password'
                onChange={handleChange}
              />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox colorScheme="teal">Remember me</Checkbox>
                {!isAuth && <Link
                  color={'teal.600'}
                  as={RouterLink}
                  to="/signUp"
                  _hover={{
                    textDecoration: 'underline',
                  }}>
                  Sign Up
                </Link>}
              </Stack>
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
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Stack>

            <Box textAlign="center">
              <Link
                color={'teal.600'}
                onClick={toggleColorMode}
                _hover={{
                  textDecoration: 'underline',
                }}>
                {useColorModeValue('Dark', 'Light')} Mode
              </Link>
            </Box>

          </Stack>
        </Box>
      </Flex>
    </Stack>

  );
};


