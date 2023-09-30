import {logo} from "../../logo/logo" 
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Link,
  FormHelperText,
  Box,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

// ...

export const Login = () => {
  const { toggleColorMode } = useColorMode(); 
  const formBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      spacing={0}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        bgGradient="linear(to-r, teal.200, teal.500)">
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={logo}
          w="100%"
          h="100%"
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
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
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
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
            />
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox colorScheme="teal">Remember me</Checkbox>
              <Link
                color={'teal.500'}
                as={RouterLink}
                to="/signUp"
                _hover={{
                  textDecoration: 'underline',
                }}>
                Sign Up
              </Link>
            </Stack>
            <Button
              colorScheme={'teal'}
              variant={'solid'}
              _hover={{
                bg: 'teal.600',
              }}>
              Sign in
            </Button>
          </Stack>

          <Box textAlign="center">
            <Link
              color={'teal.500'}
              onClick={toggleColorMode}
              _hover={{
                textDecoration: 'underline',
              }}>
              Toggle {useColorModeValue('Dark', 'Light')} Mode
            </Link>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};
