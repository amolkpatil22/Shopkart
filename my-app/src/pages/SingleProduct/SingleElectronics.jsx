import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  VStack,
  Center,
  Badge,
  Container,
  Button,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import { fetchElectronics } from "../Products/ProductReducer/action";
import { postdata } from "../Home/action"
import { shallowEqual } from "react-redux"
import { useNavigate } from "react-router-dom";

const SingleElectronics = () => {
  let toast = useToast()
  const { id } = useParams();
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const [data, setData] = useState(null);
  const electronics = useSelector((store) => store.productReducer.product);
  let { isAuth, userSuccessData } = useSelector((store) => {
    return {
      isAuth: store.loginReducer.isAuth,
      userSuccessData: store.loginReducer.userSuccessData,
    }
  }, shallowEqual)

  useEffect(() => {
    const product = electronics.find((el) => el.id === +id);
    setData(product);
  }, [electronics, id]);

  useEffect(() => {
    if (data == null) {
      dispatch(fetchElectronics())
    }
  }, [data])



  const datapost = (e) => {
    if (isAuth == false) {
      return navigate("/login")
    }
    else {
      let newdata = userSuccessData
      let flag = false
      newdata.cart.map((a) => {
        if (a.id == e.id) {
          flag = true
          toast({
            title: 'Item Already In Cart',
            status: 'warning',
            duration: 2000,
            isClosable: true,
          });
          return
        }
      })
      if (flag == false) {
        newdata.cart.push(e)
        dispatch(postdata(isAuth, newdata.cart))
        toast({
          title: 'Item Added To The Cart',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
    }

  }


  return (
    <Center>
      <Container maxW="100%" marginTop="50px" marginBottom="none">

        <Grid templateColumns="1fr 1fr" gap={4} margin="auto" shadow="md" borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          width="80%"
          _hover={{ transform: "scale(1.02)" }}
          display="flex"
        >

          <Box
            display="flex"
            gap={5}
            margin="auto"
          >



            <GridItem colSpan={1} >
              <Image src={data?.image} alt="image" maxW="400px" />
            </GridItem>

            <GridItem colSpan={1} width="500px">

              <Text fontSize="20px" fontWeight="bold" mt="2" >
                {data?.title}
              </Text>
              <VStack spacing="2" align="start" mt="2">
                <br />
                <Badge fontSize="18px" colorScheme="blue" >
                  ${data?.price}
                </Badge>
                <br />
                <Text fontSize="18px"> {data?.brand}</Text>
                <br />
                <Text fontSize="18px" textColor="gray.500">{data?.description}</Text>
                <br />


                <Button
                  size={"lg"}
                  colorScheme="green"
                  backgroundColor={"rgb(0,61,41)"}
                  color={"white"}
                  borderRadius={"30px"}
                  marginBottom={"20px"}
                  onClick={() => { datapost(data) }}
                >
                  Add to Cart
                </Button>

              </VStack>

            </GridItem>

          </Box>
        </Grid>
      </Container>
    </Center>
  );
};

export default SingleElectronics;