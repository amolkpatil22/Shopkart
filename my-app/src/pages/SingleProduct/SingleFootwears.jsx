// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Image,
//   Text,
//   VStack,
//   Center,
//   Badge,
//   Container,
//   Button,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";

// const SingleFootwears = () => {
//   const { id } = useParams();
//   const [data, setData] = useState({});
//   const footwears = useSelector((store) => store.productReducer.footwears);

//   useEffect(() => {
//     const product = footwears.find((el) => el.id === +id);
//     setData(product);
//   }, [footwears, id]);

//   return (
//     <Center>
//       <Container maxW="100%" marginTop="8px">
        
//         <Grid templateColumns="1fr 1fr" gap={4}  margin="auto" shadow="md"  borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               p="4"
//               width="80%"
//               _hover={{ transform: "scale(1.02)" }}
//               display="flex"
//              >

//           <Box  
//               display="flex"
//               gap={5}
//               margin="auto"
//             >
//           <GridItem colSpan={1} >
//             <Image  src={data.image} alt="image" maxW="400px" />
//           </GridItem>

//           <GridItem colSpan={1} width="500px">
          
//               <Text fontSize="20px" fontWeight="bold" mt="2" >
//                 {data.title}
//               </Text>
//               <VStack spacing="2" align="start" mt="2">
//                 <br />
//                 <Badge fontSize="18px" colorScheme="blue">
//                    ${data.price}
//                 </Badge>
//                 <br />
//                 <Text fontSize="18px"> {data.brand}</Text>
//                 <br />
//                 <Text fontSize="18px" textColor="gray.500">{data.description}</Text>
//                 <br />
//                 <Button
//                   size={"lg"}
//                   colorScheme="green"
//                   backgroundColor={"rgb(0,61,41)"}
//                   color={"white"}
//                   borderRadius={"30px"}
//                   marginBottom={"20px"}
//                 >
//                   Add to Cart
//                 </Button>
//               </VStack>
           
//           </GridItem>
//           </Box>
//         </Grid>
//       </Container>
//     </Center>
//   );
// };

// export default SingleFootwears;